export function run(input) {
  const errors = [];

  input.cart.lines.forEach((line) => {
    const { metafield, handle } = line.merchandise.product;

    if (metafield?.value) {
      const metafieldDate = new Date(metafield.value);
      const currentDate = new Date(input.shop.localTime.date);

      if (metafieldDate < currentDate) {
        errors.push({
          localizedMessage: `The preorder date for ${handle} has passed already. Please remove this item from the cart.`,
          target: "cart"
        });
      }
    }
  });

  return { errors };
}