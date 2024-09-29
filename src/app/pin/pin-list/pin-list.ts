export interface PinList {
  id: number;
  title: string;
  image: File;
  collaborators: string;
  privacyStatus: string;
}

export interface CountryList {
  country: string;
  region: string;
  countryCode: string;
}

export interface CountryListResult {
  status: string;
  'status-code': number;
  version: string;
  access: string;
  total: number;
  offset: number;
  limit: number;
  data: any;
}

export interface CustomerList {
  title: string;
  email: string;
  region: string;
  country: string;
  id: string;
}
