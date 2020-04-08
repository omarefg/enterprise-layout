class NavLink extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.text = this.getAttribute('text')

        const template = document.createElement('template')
        template.innerHTML = this._addTemplateInnerHtml()

        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    _addTemplateInnerHtml() {
        return (`
            <style></style>
            <a href="#">${this.text}</a>
        `)
    }
}

customElements.define("nav-link", NavLink)