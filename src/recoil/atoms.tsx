import { atom, selector } from 'recoil';
import { CompanyListType } from '../types';

export const companyListAtoms = atom<CompanyListType>({
  key: 'companyListAtoms',
  default: { companies: [], companyCount: 0 },
});

export const selectedGovernmentLocationAtoms = atom<string>({
  key: 'selectedGovernmentLocationAtoms',
  default: '',
});

export const selectedSectorAtoms = atom<string>({
  key: 'selectedSectorsAtoms',
  default: '',
});

export const selectedPageNumberAtoms = atom<number>({
  key: 'selectedPageNumberAtoms',
  default: 0,
});

export const lastPageNumberSelector = selector<number>({
  key: 'lastPageNumberSelector',
  get: ({ get }) => {
    const companyCount = get(companyListAtoms).companyCount;

    return Math.ceil(companyCount / 20);
  },
});

export const isLoadingAtoms = atom<boolean>({
  key: 'isLoadingAtoms',
  default: false,
});
