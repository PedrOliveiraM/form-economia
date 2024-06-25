const value = 1000.57;

const currencyFormatter = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

console.log(currencyFormatter(value));
