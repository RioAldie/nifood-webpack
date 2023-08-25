class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<nav class="navbar navbar-expand-lg pl-5 position-sticky top-0"> <div class="container-fluid">
      <img
        src="../asset/logo-nifood.png"
        alt=""
        width="120"
        height="40" />
    </div> </nav>`;
  }
}

export { AppBar };
