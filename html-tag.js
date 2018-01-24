const htmlValue = value => value instanceof Element
    ? value.innerHTML
    : Array.isArray(value)
        ? value.join('')
        : typeof value === 'function'
            ? `javascript: (${String(value)})(event)`
            : String(value)

/**
 * @param {TemplateStringsArray} strings
 * @param {...any} values
 */
export default function html(strings, ...values) {
    const rawStrings = strings.raw
    const template = document.createElement('template')
    template.innerHTML = values
        .reduce((acc, v, i) => acc + htmlValue(v) + rawStrings[i + 1], rawStrings[0])
        .replace(/^\s+|\s+$/g, '')
    return template.content.childNodes.length === 1
        ? /** @type {HTMLElement} */ (template.content.firstChild)
        : template.content
}
