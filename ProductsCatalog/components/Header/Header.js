class Header {

    showCart() {
        cart.render()
    }
    render() {
        const productsInCart = PRODUCTS_DATA.filter(element => element.inCart)

        const html = `
            <div class="header">
                <button onclick="header.showCart()">
                    <span class="header__counter">🔥 ${productsInCart.length}</span>
                </button>
            </div>
        `

        ROOT_HEADER.innerHTML = html
    }
}

const header = new Header()