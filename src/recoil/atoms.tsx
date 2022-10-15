import { atom } from 'recoil';
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

export const isLoadingAtoms = atom<boolean>({
  key: 'isLoadingAtoms',
  default: false,
});
