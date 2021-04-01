/**
 *  Create a new product
 * 
 * @param product 
 * @param price 
 * @param quantity 
 * @return ({productId,name,image,price,quantity,totalPrice})
 */
const createProduct = (product, price: number, quantity) => {
    const { productId, image, name } = product;
    return {
        productId,
        name,
        image,
        price,
        quantity,
        totalPrice: parseFloat((price * quantity).toFixed(2))
    }
}
/**
 * Initialize the Cart for the first time.
 * 
 * @param product 
 */
const initCart = (product) => {
    console.log(`Adding product`, product)
    const normalizedPrice = getNormalizedPrice(product.salePrice ? product.salePrice : product.regularPrice)
    const cart = {
        products: [],
        productsCount: 1,
        totalPrice: normalizedPrice

    }
    const newProduct = createProduct(product, normalizedPrice, 1);
    cart.products.push(newProduct)

    localStorage.setItem('cart', JSON.stringify(cart))
    return cart;
}

/**
 * 
 * @param cart 
 * @param product 
 * @param quantity 
 * @param newQuantity 
 */
const updateCart = (cart, product, quantity, newQuantity = false) => {

    const updatedProducts = getUpdatedProducts(cart.products, product, quantity, newQuantity);

    const addPrice = (total, item) => {
        total.totalPrice += item.totalPrice;
        total.quantity += item.quantity;

        return total;
    };
    console.log(`updatedProducts: `, updatedProducts)
    const total = updatedProducts.reduce(addPrice, { totalPrice: 0, quantity: 0 });

    const updatedCart = {
        products: updatedProducts,
        productsCount: parseInt(total.quantity),
        totalPrice: parseFloat(total.totalPrice)
    };

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    return updatedCart;


}

/**
 * 
 * @param products 
 * @param product 
 * @param quantity 
 * @param newQuantity 
 */
const getUpdatedProducts = (products, product, quantity, newQuantity) => {
    const productExistsAt = cartHasProduct(products, product.productId)

    if (productExistsAt > -1) {
        const updatedProducts = products;
        const updatedProductItem = updatedProducts[productExistsAt]

        updatedProductItem.quantity = newQuantity ? parseInt(newQuantity) : parseInt(updatedProductItem.quantity + quantity)
        updatedProductItem.totalPrice = parseFloat((updatedProductItem.price * updatedProductItem.quantity).toFixed(2));
        return updatedProducts
    } {
        const price = getNormalizedPrice(product.salePrice ? product.salePrice : product.regularPrice)
        const newProduct = createProduct(product, price, quantity)
        products.push(newProduct)
        return products
    }
}

/**
 * 
 * @param products 
 * @param productId 
 * @returns index of the existing product if any.
 */
const cartHasProduct = (products: any[], productId) => {
    const product = products.filter((product) => {
        return product.productId === productId;
    })
    const productIndex = products.indexOf(product[0])
    return productIndex;
}

/**
 * Takes a price string in format $[price] and returns a float conversion.
 * 
 * @param price 
 * @returns (normalizedPrice: number)
 */
const getNormalizedPrice = (price) => {
    console.log(`Normalizing price... ${price}`)
    const normalizedPrice = price.match(/[+-]?\d+(\.\d+)?/g)[0];
    console.log(`NormalizedPrice`, normalizedPrice)
    return normalizedPrice && parseFloat(parseFloat(normalizedPrice).toFixed(2));

}

export { createProduct, initCart, getNormalizedPrice, updateCart }