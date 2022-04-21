import { LitElement, html } from 'lit';

export const tagName = 'my-element';

class MyElement extends LitElement {
  render() {
    return html` <p>Hello world! From my-element</p> `;
  }
}

customElements.define(tagName, MyElement);
