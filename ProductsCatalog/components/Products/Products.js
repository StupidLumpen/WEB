class Products {

    createProducts() {
        let html = ``

        for (let item of PRODUCTS_DATA) {
            html += productsItem.render(item)
        }

        return html
    }

    render() {
        const html = `
            <div class="products">
                <div class="products__container">
                    ${this.createProducts()}
                </div>                
            </div>
        `

        ROOT_PRODUCTS.innerHTML = html
    }
}

const productsPage = new Products()