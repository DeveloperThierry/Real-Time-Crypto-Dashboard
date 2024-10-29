export function currencyFormat(num) {
  return "$" + num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
