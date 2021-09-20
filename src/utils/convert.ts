export const calculateTotalAndConvert = (price: string, amount: number): string =>
  price ? `$${(+price.slice(1).replace(/,/g, '') * amount).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}.00` : '';

export const calculateTotal = (price: string, amount: number): number =>
  price ? +price.slice(1).replace(/,/g, '') * amount : 0;

export const convertMoney = (price: number): string => `$${price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}.00`;

export const convertName = (name: string): string => `${name.toLowerCase().replace(/ /g, '-')}`;
