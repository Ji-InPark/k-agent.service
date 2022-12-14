export type CompanyType = {
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

export type CompanyListType = {
  companies: Array<CompanyType>;
  companyCount: number;
};

export type AutoCompleteCompanyListType = {
  companies: Array<string>;
  companyCount: number;
};

export enum RecentSearchWordEnum {
  ADD,
  DELETE,
}
