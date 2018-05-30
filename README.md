# [`@nicolasparada/html-tag`](https://www.npmjs.com/package/@nicolasparada/html-tag)

HTML tagged template literal function.

## Example Usage
```js
import html from 'https://unpkg.com/@nicolasparada/html-tag'

const template = html`
    <style>:host { display: block }</style>
    Hello, <slot>world</slot>!
`

class HelloWorld extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

customElements.define('hello-world', HelloWorld)
```

This function will create an [`HTMLTemplateElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement). It's meant to give just [syntax highlighting](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html).

If you try to use it inside itself again, it will pay the cost of creating a template again and getting its `innerHTML`. So, use a normal string or something like `String.raw`.

Instead of:
```js
html`
    <ul>
        ${['foo', 'bar'].map(item => html`
            <li>${item}</li>
        `)}
    </ul>
`
```

Do:
```js
html`
    <ul>
        ${['foo', 'bar'].map(item => String.raw`
            <li>${item}</li>
        `)}
    </ul>
`
```
