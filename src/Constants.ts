export enum CurrencyTypeEnum {
  USD = "$",
  EUR = "€",
  GBP = "£",
  INR = "₹",
  BDT = "৳",
}

export interface iCurrencyObject {
  label: string;
  value: string;
}

export const availableCurrencies: iCurrencyObject[] = [
  { label: "USD", value: CurrencyTypeEnum.USD },
  { label: "EUR", value: CurrencyTypeEnum.EUR },
  { label: "GBP", value: CurrencyTypeEnum.GBP },
  { label: "INR", value: CurrencyTypeEnum.INR },
  { label: "BDT", value: CurrencyTypeEnum.BDT },
];
