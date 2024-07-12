import { atom } from 'recoil';
import { Company, PageResponse } from '../types';

export const companyResponseAtoms = atom<PageResponse<Company>>({
  key: 'companyResponseAtoms',
  default: {
    totalPages: 0,
    totalElements: 0,
    pageable: {
      pageNumber: 0,
      pageSize: 0,
      sort: {
        sorted: false,
        unsorted: false,
        empty: false,
      },
      offset: 0,
      unpaged: false,
      paged: false,
    },
    numberOfElements: 0,
    first: false,
    last: false,
    size: 0,
    content: [],
    number: 0,
    sort: {
      sorted: false,
      unsorted: false,
      empty: false,
    },
    empty: false,
  },
});

export const selectedGovernmentLocationAtoms = atom<string>({
  key: 'selectedGovernmentLocationAtoms',
  default: '',
});

export const selectedSectorAtoms = atom<string>({
  key: 'selectedSectorsAtoms',
  default: '',
});

export const isLoadingAtoms = atom<boolean>({
  key: 'isLoadingAtoms',
  default: false,
});

export const autocompleteHoverIndexAtoms = atom<number>({
  key: 'autocompleteHoverIndexAtoms',
  default: -1,
});

export const autocompleteCompanyListAtoms = atom<Company[]>({
  key: 'autocompleteCompanyListAtoms',
  default: [],
});

export const recentSearchWordsAtoms = atom<Array<string>>({
  key: 'recentSearchWordsAtoms',
  default: [],
});
