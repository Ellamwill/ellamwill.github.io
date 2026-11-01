// Size complete previews around their real copy/captions, rather than cropping.
export {};
const body = document.querySelector<HTMLElement>('.ux-case-body');
if (body) {
  let queued = false;
  let releaseQueued = false;
  const number = (value: string) => parseFloat(value) || 0;
  const columns = (element: Element) => getComputedStyle(element).gridTemplateColumns.split(' ').filter(Boolean).length;
  const releaseHeadings = () => {
    releaseQueued = false;
    body.querySelectorAll<HTMLElement>('.has-sticky-heading').forEach(section => {
      // Release when the next section/divider enters the viewport, rather than
      // carrying the heading down until that divider reaches the sticky stack.
      const shift = Math.min(0, section.getBoundingClientRect().bottom - innerHeight);
      section.style.setProperty('--heading-release', `${shift}px`);
    });
  };
  const measure = () => {
    queued = false;
    const root = getComputedStyle(document.documentElement);
    const available = innerHeight - number(root.getPropertyValue('--site-header-height')) - number(root.getPropertyValue('--case-bar-height')) - 16;
    body.querySelectorAll<HTMLElement>('.section-content').forEach(content => {
      const section = content.closest<HTMLElement>('.case-section')!;
      const blocks = [...content.children].filter((block): block is HTMLElement => block instanceof HTMLElement);
      const parallel = content.classList.contains('parallel-content') && columns(content) > 1;
      content.style.removeProperty('--parallel-copy-height');
      const copyHeight = Math.max(0, ...blocks.map(block => block.querySelector<HTMLElement>('.block-copy')?.getBoundingClientRect().height || 0));
      if (parallel) content.style.setProperty('--parallel-copy-height', `${Math.ceil(copyHeight)}px`);
      const heading = section.querySelector<HTMLElement>('.section-heading')!;
      const desktop = getComputedStyle(section).display === 'grid';
      const headingSpace = desktop ? 0 : heading.getBoundingClientRect().height + number(getComputedStyle(heading).marginBottom);
      blocks.forEach(block => {
        const group = block.querySelector<HTMLElement>('.figure-group');
        if (!group) return;
        const figures = [...group.querySelectorAll<HTMLElement>('.case-figure')];
        const rows = Math.ceil(figures.length / Math.max(1, columns(group)));
        const caption = Math.max(0, ...figures.map(figure => figure.querySelector('figcaption')?.getBoundingClientRect().height || 0));
        const copy = block.querySelector('.block-copy')?.getBoundingClientRect().height || 0;
        const gap = number(getComputedStyle(group).rowGap);
        const budget = (available - number(getComputedStyle(section).paddingTop) - headingSpace - copy - number(getComputedStyle(group).marginTop) - 24 - gap * (rows - 1)) / rows - caption - 24;
        group.style.setProperty('--preview-height', `${Math.max(120, Math.min(430, Math.floor(budget)))}px`);
      });
      const stickyTop = number(getComputedStyle(heading).top);
      const long = desktop && section.getBoundingClientRect().height > innerHeight - stickyTop + number(getComputedStyle(section).paddingTop) + 2;
      section.classList.toggle('has-sticky-heading', long);
      if (!long) section.style.removeProperty('--heading-release');
    });
    releaseHeadings();
  };
  const queue = () => { if (!queued) { queued = true; requestAnimationFrame(measure); } };
  measure();
  addEventListener('resize', queue);
  addEventListener('pageshow', queue);
  addEventListener('scroll', () => {
    if (!releaseQueued) { releaseQueued = true; requestAnimationFrame(releaseHeadings); }
  }, { passive: true });
  document.fonts.ready.then(queue);
  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(queue);
    body.querySelectorAll('.block-copy, .section-heading').forEach(element => observer.observe(element));
    document.querySelectorAll('.site-header, .case-section-nav').forEach(element => observer.observe(element));
  }
}
