const isObject = x => typeof x === 'object' && x !== null

const htmlValue = value => value instanceof Element
    ? value.innerHTML
    : Array.isArray(value)
        ? value.map(htmlValue).join('')
        : isObject(value)
            ? JSON.stringify(value)
            : String(value)


/**
 * @param {TemplateStringsArray} strings
 * @param {...any} values
 */
export default function html(strings, ...values) {
    const rawStrings = strings.raw
    const template = document.createElement('template')
    const innerHTML = values
        .reduce((acc, v, i) => acc + htmlValue(v) + rawStrings[i + 1], rawStrings[0])
        .replace(/^\s+|\s+$/g, '')
    console.log(innerHTML)
    template.innerHTML = innerHTML
    return template
}
