class Cart {

    close() {
        ROOT_CART.innerHTML = ''
    }
    render() {
        console.log(1)
        console.log(PRODUCTS_DATA.filter(element => element.inCart))

        const html = `
            <div class="cart">
                <div class="cart__container">
                    <button class="cart__close-button" onclick="cart.close()"></button>
                </div>
            </div>
        `

        ROOT_CART.innerHTML = html
    }
}

const cart = new Cart()