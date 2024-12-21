export function formatMoney(
  value: number,
  currency: string,
  locale: string
): string {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    value
  );
}
