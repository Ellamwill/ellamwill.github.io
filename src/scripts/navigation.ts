// A same-tab, same-site click supplies the origin; history length alone never does.
import './section-navigation';
export {};
type Origin = { entry: string; url: string; label: string };
type Pending = Origin & { to: string; at: number };
type WorkLocation = { url: string; entry: string; x: number; y: number };
const pendingKey = 'ella-navigation-pending';
const workKey = 'ella-work-location';
const pageURL = () => location.pathname + location.search + location.hash;
const read = <T>(key: string): T | null => { try { return JSON.parse(sessionStorage.getItem(key) || 'null'); } catch { return null; } };
const write = (key: string, value: unknown) => { try { sessionStorage.setItem(key, JSON.stringify(value)); } catch {} };
const clear = (key: string) => { try { sessionStorage.removeItem(key); } catch {} };
const safeURL = (value: string) => {
  try { const url = new URL(value, location.origin); return url.origin === location.origin && /^\/(?:$|about\/$|ux-ui\/|graphic-design\/)/.test(url.pathname) ? url : null; } catch { return null; }
};
const workURL = (value: string) => {
  const url = safeURL(value);
  return url && url.pathname !== '/about/' ? url : null;
};
const state = history.state && typeof history.state === 'object' ? history.state : {};
let entry = typeof state.ellaEntry === 'string' ? state.ellaEntry : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
let origin: Origin | null = state.ellaOrigin || null;
const pending = read<Pending>(pendingKey);
const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
if (!state.ellaEntry && navigation?.type === 'navigate' && pending && Date.now() - pending.at < 30000 && pending.to === location.pathname + location.search) {
  let referrer: URL | null = null;
  try { referrer = new URL(document.referrer); } catch {}
  const source = safeURL(pending.url);
  if (source && referrer?.origin === location.origin && referrer.pathname === source.pathname) origin = pending;
}
clear(pendingKey);
// Hash entries get their own depth, so Back can return through the browser's
// original page entry and native scroll restoration, even after section jumps.
let hashDepth: number | null = Number.isInteger(state.ellaHashDepth) ? state.ellaHashDepth : state.ellaSameDocument ? null : 0;
try { history.replaceState({ ...state, ellaEntry: entry, ellaOrigin: origin, ellaHashDepth: hashDepth }, '', location.href); } catch {}
addEventListener('popstate', () => {
  if (history.state?.ellaEntry === entry && Number.isInteger(history.state.ellaHashDepth)) hashDepth = history.state.ellaHashDepth;
});
addEventListener('hashchange', () => {
  if (history.state?.ellaEntry === entry && Number.isInteger(history.state.ellaHashDepth)) {
    hashDepth = history.state.ellaHashDepth;
  } else {
    if (hashDepth !== null) hashDepth += 1;
    try { history.replaceState({ ...history.state, ellaEntry: entry, ellaOrigin: origin, ellaHashDepth: hashDepth }, '', location.href); } catch {}
  }
});

document.addEventListener('click', event => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const anchor = (event.target as Element)?.closest<HTMLAnchorElement>('a[href]');
  if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download') || anchor.hasAttribute('data-enlarge') || anchor.hasAttribute('data-origin-back')) return;
  const target = safeURL(anchor.href);
  if (!target || target.pathname + target.search === location.pathname + location.search) return;
  write(pendingKey, { entry, url: pageURL(), label: location.pathname === '/' ? 'All work' : document.title.split(' — ')[0], to: target.pathname + target.search, at: Date.now() });
});

const back = document.querySelector<HTMLAnchorElement>('[data-origin-back]');
if (back && origin && safeURL(origin.url) && origin.url !== pageURL()) {
  const destination = origin;
  back.hidden = false;
  back.href = destination.url;
  back.setAttribute('aria-label', `Back to ${destination.label}`);
  back.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const depth = history.state?.ellaHashDepth;
    if (history.state?.ellaEntry === entry && Number.isInteger(depth) && depth >= 0) {
      event.preventDefault(); history.go(-(depth + 1));
    }
  });
}
// Discard an old-version correction; native history owns restoration now.
clear('ella-navigation-restore');

// Work/About remembers the current work page separately from a case's origin.
// The common path returns to the original history entry, so the browser keeps
// its position and the case retains its own Back destination.
const rememberWork = () => {
  if (workURL(pageURL())) write(workKey, { url: pageURL(), entry, x: scrollX, y: scrollY });
};
const workLink = document.querySelector<HTMLAnchorElement>('[data-work-link]');
let remembered = read<WorkLocation>(workKey);
if (location.pathname === '/about/' && workLink) {
  const updateRememberedWork = () => {
    remembered = read<WorkLocation>(workKey);
    workLink.href = remembered && workURL(remembered.url) ? remembered.url : '/';
  };
  updateRememberedWork();
  addEventListener('pageshow', updateRememberedWork);
  workLink.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!remembered || !workURL(remembered.url)) return;
    const depth = history.state?.ellaHashDepth;
    if (origin?.entry === remembered.entry && origin.url === remembered.url && history.state?.ellaEntry === entry && Number.isInteger(depth) && depth >= 0) {
      event.preventDefault();
      history.go(-(depth + 1));
    } else {
      // Direct About visits can still use a known same-session work location.
      write('ella-work-restore', { ...remembered, at: Date.now() });
    }
  });
}
document.addEventListener('click', event => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const anchor = (event.target as Element)?.closest<HTMLAnchorElement>('a[href]');
  if (anchor && safeURL(anchor.href)?.pathname === '/about/') rememberWork();
});
if (workURL(pageURL())) {
  const updateWorkLink = () => { if (workLink) workLink.href = pageURL(); };
  updateWorkLink();
  workLink?.addEventListener('click', event => {
    if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) event.preventDefault();
  });
  rememberWork();
  addEventListener('pagehide', rememberWork);
  addEventListener('pageshow', rememberWork);
  addEventListener('hashchange', rememberWork);
  addEventListener('hashchange', updateWorkLink);
}
