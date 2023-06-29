const formatCurrency = (valeu, currency) => {
  return valeu.toLocaleString("pt-br", { style: "currency", currency });
};

export default formatCurrency;
