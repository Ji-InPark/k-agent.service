export interface Company {
  id: number;
  companyName: string;
  companyLocation: string;
  companyPhoneNumber: string;
  companyFaxNumber: string;
  companySector: string;
  companyScale: string;
  serviceType: string;
  companyKeyword: string;
  wantedInsightKey: string;
}

export enum RecentSearchWordEnum {
  ADD,
  DELETE,
}

export interface PageResponse<T> {
  content: T[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  empty: boolean;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}
