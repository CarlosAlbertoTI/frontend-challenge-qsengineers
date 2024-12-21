import { Modifier, Product } from "@src/store/menu/types";


export const calculateFullPrice = (
  product: Product,
  modifiers: Modifier[],
  quantity: number
) => {
  // Verifique se `modifiers` é um array
  const validModifiers = Array.isArray(modifiers) ? modifiers : [];
  
  const sumOfModifiers = validModifiers.reduce((innerAccumulator, modifier) => {
    const sumOfItems = modifier.items.reduce((itemAccumulator, item) => {
      const itemTotal = item.price * (item.quantity || 0);
      return itemAccumulator + itemTotal;
    }, 0);
    return innerAccumulator + sumOfItems;
  }, 0);

  const result = (product.price + sumOfModifiers) * quantity;

  return result;
};
