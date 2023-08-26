class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<footer
      class="w-100 d-flex flex-column justify-content-center align-items-center gap-3 p-3 mt-5 bg-danger">
      <p class="font-weight-bold text-light fs-5">
        Nippon Foods Restaurant Copyright
      </p>
    </footer>`;
  }
}

export { Footer };
