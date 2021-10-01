#!/usr/bin/env ts

// Hello World

export class HelloWorld extends HTMLElement {
  private container: HTMLDivElement = document.createElement('div');
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot!.appendChild(this.container)
  }
  sayHi(name: string) {
    this.container.textContent = `Hello, ${name}`;
  }
}

customElements.define('hello-world', HelloWorld);
