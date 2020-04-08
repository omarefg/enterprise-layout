export default class EntrySection extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.head = this.getAttribute('head')
        this.btn = this.getAttribute('btn')

        const template = document.createElement('template')
        template.innerHTML = this._addTemplateInnerHtml()

        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    set styleSheet (styleSheet) {
        this.shadowRoot.adoptedStyleSheets = [styleSheet]
    }

    _addTemplateInnerHtml () {
        return (`
            <style></style>
            <div>
                <h3>${this.head}</h3>
                <div><slot name="content"></slot></div>
                <button>${this.btn}</button>
            </div>
        `)
    }
}

customElements.define('entry-section', EntrySection)