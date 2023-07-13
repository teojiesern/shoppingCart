const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "MYR",
    style: "currency",
});

export function MoneyFormatter(money: number) {
    return currencyFormatter.format(money);
}
