export const calculateBasePriceAndDiscount = ({ product, quantity }) => {
    const basePrice = product.basePrice * quantity;
    const discount =
        Math.max(quantity - product.discountThreshold, 0) *
        product.basePrice *
        product.discountRate;
    return { basePrice, discount };
}

export const calculatePrice = ({ priceData, shippingMethod, quantity }) => {
    const { basePrice, discount } = priceData;
    const shippingPerCase =
        basePrice > shippingMethod.discountThreshold
        ? shippingMethod.discountedFee
        : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return { price };
}