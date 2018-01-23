# [`@nicolasparada/html-tag`](https://www.npmjs.com/package/@nicolasparada/html-tag)

HTML tagged template literal function.

## Usage

```js
import html from 'https://unpkg.com/@nicolasparada/html-tag'

const anchorElement = html`
    <a href="#!">Link</a>
`

const documentFragment = html`
    <h1>Lorem Ipsum</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt suscipit commodi ex adipisci cum nulla quidem quas et optio. Doloremque nihil eum officiis? Quae voluptate earum quos pariatur repudiandae nobis!</p>
`
```

If you write just one element inside the tagged function, it will return it (`HTMLElement`). Otherwise, it will return a `DocumentFragment`.
