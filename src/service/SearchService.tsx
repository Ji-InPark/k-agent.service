import search from '../axios';
import { CompanyListType } from '../types';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  autocompleteHoverIndexAtoms,
  companyListAtoms,
  isLoadingAtoms,
  selectedGovernmentLocationAtoms,
  selectedPageNumberAtoms,
  selectedSectorAtoms,
} from '../recoil/atoms';
import RecentSearchWordService from './RecentSearchWordService';

function SearchService() {
  const setCompanyList = useSetRecoilState(companyListAtoms);
  const setIsLoading = useSetRecoilState(isLoadingAtoms);
  const setSelectedPageNumber = useSetRecoilState(selectedPageNumberAtoms);
  const setHoverIndex = useSetRecoilState(autocompleteHoverIndexAtoms);
  const governmentLocation = useRecoilValue(selectedGovernmentLocationAtoms);
  const sector = useRecoilValue(selectedSectorAtoms);
  const recentSearchWordService = RecentSearchWordService();

  return function postSearch(searchText: string, useOption: boolean) {
    setHoverIndex(-1);

    setIsLoading(true);

    setSelectedPageNumber(0);

    recentSearchWordService(searchText);

    search
      .post<CompanyListType>('/search', {
        companyName: searchText,
        governmentLocation: useOption ? governmentLocation : '',
        sector: useOption ? sector : '',
      })
      .then((response) => setCompanyList(response.data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };
}

export default SearchService;
