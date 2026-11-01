// Native anchors and the current-section marker share the measured sticky stack.
export {};
const root = document.documentElement;
const header = document.querySelector<HTMLElement>('.site-header');
const bar = document.querySelector<HTMLElement>('.case-section-nav');
const links = [...document.querySelectorAll<HTMLAnchorElement>('.case-section-nav a[href^="#"]')];
const sections = links.map(link => document.getElementById(link.hash.slice(1))).filter((section): section is HTMLElement => !!section);

if (header && bar && sections.length) {
  let headerHeight = 0;
  let barHeight = 0;
  let gap = 16;
  let queued = false;
  const measure = () => {
    const nextHeader = Math.ceil(header.getBoundingClientRect().height);
    const nextBar = Math.ceil(bar.getBoundingClientRect().height);
    if (nextHeader !== headerHeight) {
      headerHeight = nextHeader;
      root.style.setProperty('--site-header-height', `${headerHeight}px`);
    }
    if (nextBar !== barHeight) {
      barHeight = nextBar;
      root.style.setProperty('--case-bar-height', `${barHeight}px`);
    }
    gap = parseFloat(getComputedStyle(root).getPropertyValue('--case-anchor-gap')) || 16;
  };
  const update = () => {
    queued = false;
    const line = headerHeight + barHeight + gap;
    let current = [...sections].reverse().find(section => section.getBoundingClientRect().top <= line + 2);
    const last = sections[sections.length - 1];
    if (scrollY + innerHeight >= document.documentElement.scrollHeight - 2 && last.getBoundingClientRect().top < innerHeight) current = last;
    links.forEach(link => {
      if (current && link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  const queueUpdate = () => {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  };
  const refresh = () => { measure(); queueUpdate(); };

  // A direct hash may have landed before fonts or measured wrapping settled.
  // Align it once at page show, before interaction; history and Work returns
  // retain their saved positions, including positions partway through a section.
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
  let pendingTarget: HTMLElement | null = null;
  try {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (navigation?.type === 'navigate' && target?.closest('.case-section')) pendingTarget = target;
  } catch {}
  const cancelAlignment = () => { pendingTarget = null; };
  ['wheel', 'touchstart', 'pointerdown', 'keydown'].forEach(type => addEventListener(type, cancelAlignment, { once: true, passive: true }));
  const initialize = (persisted = false) => {
    measure();
    const target = pendingTarget;
    pendingTarget = null;
    if (target && !persisted && root.dataset.workRestored !== 'true') {
      const top = Math.max(0, Math.min(scrollY + target.getBoundingClientRect().top - headerHeight - barHeight - gap, root.scrollHeight - innerHeight));
      if (Math.abs(scrollY - top) > 2) scrollTo({ top, behavior: 'instant' });
    }
    update();
  };
  measure();
  update();
  addEventListener('scroll', queueUpdate, { passive: true });
  addEventListener('hashchange', queueUpdate);
  addEventListener('resize', refresh);
  addEventListener('pageshow', event => initialize(event.persisted));
  if (document.readyState === 'complete') initialize();
  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(refresh);
    observer.observe(header);
    observer.observe(bar);
  }
  document.fonts.ready.then(refresh);
}
