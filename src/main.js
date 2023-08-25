import { AppBar } from './app/components/appbar.js';
import { Footer } from './app/components/footer.js';
import { writeFoodsToHTML } from './app/foods.js';

writeFoodsToHTML();

customElements.define('app-bar', AppBar);
customElements.define('footer-bar', Footer);
