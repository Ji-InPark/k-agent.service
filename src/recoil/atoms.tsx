import { atom } from 'recoil';
import { CompanyType } from '../types';

export const companyListAtoms = atom<Array<CompanyType>>({
  key: 'companyListAtoms',
  default: [],
});

export const isLoadingAtoms = atom<boolean>({
  key: 'isLoadingAtoms',
  default: false,
});
