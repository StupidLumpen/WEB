class ProductsItem {
    isInCart = false

    handleAddToCart(event) {
        const button = event.target
        const parentTagId = button.parentElement.id

        const itemData = PRODUCTS_DATA.filter(element => element.id === parentTagId)

        itemData[0].inCart = !itemData[0].inCart

        button.classList.toggle('item__button_active')

        button.innerText = button.innerText === 'Удалить из корзины' ? 'Добавить в корзину' : 'Удалить из корзины'

        header.render()
    }

    render({ id, name, img, price, inCart }) {
        return `
            <div class="products__item item" id="${id}">
                <h1 class="item__title">${name}</h1>
                <img class="item__image" src="${img}">
                <span class="item__price">⚡️ ${price} USD</span>
                <button class="item__button" onclick="productsItem.handleAddToCart(event)">Добавить в корзину</button>
            </div>
        `
    }
}

const productsItem = new ProductsItem()