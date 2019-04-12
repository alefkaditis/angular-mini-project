export interface Country {
  name: string;
  capital: string;
  currencies: Currency;
}

export interface CountryDetails {
  capital: string;
  population: number;
  nativeName: string;
  subregion: string;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}
