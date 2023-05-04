import search from '../axios';
import { CompanyList, RecentSearchWordEnum } from '../types';
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

interface NamedParameter {
  searchText: string;
  useOption?: boolean;
}

function SearchService() {
  const setCompanyList = useSetRecoilState(companyListAtoms);
  const setIsLoading = useSetRecoilState(isLoadingAtoms);
  const setSelectedPageNumber = useSetRecoilState(selectedPageNumberAtoms);
  const setHoverIndex = useSetRecoilState(autocompleteHoverIndexAtoms);
  const governmentLocation = useRecoilValue(selectedGovernmentLocationAtoms);
  const sector = useRecoilValue(selectedSectorAtoms);
  const addRecentSearchWordService = RecentSearchWordService(RecentSearchWordEnum.ADD);

  return function postSearch({ searchText, useOption = false }: NamedParameter) {
    setHoverIndex(-1);

    setIsLoading(true);

    setSelectedPageNumber(0);

    addRecentSearchWordService(searchText);

    search
      .post<CompanyList>('/search', {
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
