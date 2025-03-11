
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 882, hash: 'b631f1dc08efd7e0bea162fe4efcd5a5f0603dc0c441a01e4dff7050abffe09d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1004, hash: '2e1fe1e4c625364c20ee4b7af1682b1205240503d1befdb9fb545519f6a1a1cf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-PROXTS4M.css': {size: 5615, hash: 'i4/24Q4oo7g', text: () => import('./assets-chunks/styles-PROXTS4M_css.mjs').then(m => m.default)}
  },
};
