class HeroBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="hero-box">
      <p class="title text-danger">NiFood Japanese Restaurant</p>
      <p class="subtitle text-secondary">
        NiFood is the Best japanese restaurant in indonesia , you
        can order and make reservation from anywhere.
      </p>
      <div class="button-box">
        <a href="#form-booking" class="text-light">
          <button class="btn btn-danger text-light btn-lg">
            Book a Table
          </button>
        </a>
        <a href="menu.html">
          <button class="btn btn-outline-danger btn-lg">
            Our Menu
          </button>
        </a>
      </div>
      </div>
   `;
  }
}

export { HeroBar };
