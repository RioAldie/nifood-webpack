import { getAnchorQuery } from './app/detail.js';
import { AppBar } from './app/components/appbar.js';
import { Footer } from './app/components/footer.js';

customElements.define('app-bar', AppBar);
customElements.define('footer-bar', Footer);

getAnchorQuery();
