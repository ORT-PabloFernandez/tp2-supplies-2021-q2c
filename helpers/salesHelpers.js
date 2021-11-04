function getSaleTotal(sale) {
  const saleItems = sale.items;
  let total = 0;
  saleItems.forEach((item) => {
    const priceString = item.price.toString();
    const price = parseFloat(priceString);
    const quantity = parseInt(item.quantity);
    total += price * quantity;
  });
  return total;
}

function getLocationTotalSales(sales) {
  let result = 0;
  sales.forEach((sale) => {
    result += getSaleTotal(sale);
  });
  return result;
}

module.exports = { getLocationTotalSales };
