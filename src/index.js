import * as bootstrap from 'bootstrap';

import { Footer } from './app/components/footer.js';
import { writeFoodsToHTML } from './app/foods.js';
import css from './style.scss';
import { HeroBar } from './app/components/Hero-bar.js';
import { getAnchorQuery } from './app/detail.js';

writeFoodsToHTML();
getAnchorQuery();
customElements.define('hero-bar', HeroBar);
customElements.define('footer-bar', Footer);
