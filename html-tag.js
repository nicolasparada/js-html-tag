/**
 * Tag to create an HTMLTemplateElement.
 *
 * @param {TemplateStringsArray} strings
 * @param {any[]} values
 * @returns {HTMLTemplateElement}
 */
export default function html(strings, ...values) {
    const template = document.createElement('template')
    template.innerHTML = values
        .reduce((acc, v, i) => acc + htmlValue(v) + strings[i + 1], strings[0])
    return template
}

function htmlValue(value) {
    return value instanceof HTMLTemplateElement
        ? value.innerHTML
        : Array.isArray(value)
            ? value.map(htmlValue).join('\n')
            : String(value)
}
