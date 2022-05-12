const MICRODERMABRASION_IN_CART = "MICRODERMABRASION_IN_CART";

const ACTION_MICRODERMABRASION_IN_CART = () => {
  return {
    type: MICRODERMABRASION_IN_CART,
    payload: {
      name: "Microdermabrasion",
      price: 2500,
      duration: 15
    }
  };
};

export default ACTION_MICRODERMABRASION_IN_CART;
