/**
 * @param {TemplateStringsArray} strings
 * @param {...any} values
 */
export function html(strings, ...values) {
    const template = document.createElement('template')
    template.innerHTML = makeHTML(strings, values)
    return template
}

/**
 * @param {TemplateStringsArray} strings
 * @param {...any} values
 */
export function htmlLiteral(strings, ...values) {
    return new LiteralString(makeHTML(strings, values))
}

class LiteralString {
    constructor(string) {
        this.value = string.toString()
    }

    toString() {
        return this.value
    }
}

function makeHTML(strings, values) {
    return values
        .reduce((acc, v, i) => acc + stringify(v) + strings[i + 1], strings[0])
        .replace(/^\s+|\s+$/gu, '')
}

/**
 * @returns {string}
 */
function stringify(x) {
    return x instanceof HTMLTemplateElement
        ? x.innerHTML
        : x instanceof LiteralString
            ? x.value
            : Array.isArray(x)
                ? x.map(stringify).join('\n')
                : typeof x === 'object' && x !== null
                    ? JSON.stringify(x, null, 2)
                    : String(x)
}
