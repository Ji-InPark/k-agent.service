export type Company = {
  id: number;
  companyName: string;
  companyLocation: string;
  companyPhoneNumber: string;
  companyFaxNumber: string;
  companySector: string;
  companyScale: string;
  serviceType: string;
  companyKeyword: string;
  kreditJobKey: string;
};

export type CompanyList = {
  companies: Array<Company>;
  companyCount: number;
};

export type AutoCompleteCompanyList = {
  companies: Array<string>;
  companyCount: number;
};

export enum RecentSearchWordEnum {
  ADD,
  DELETE,
}
