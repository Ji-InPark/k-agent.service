import search from '../axios';
import { Company, PageResponse, RecentSearchWordEnum } from '../types';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { autocompleteHoverIndexAtoms, companyListAtoms, isLoadingAtoms, selectedGovernmentLocationAtoms, selectedSectorAtoms } from '../recoil/atoms';
import RecentSearchWordService from './RecentSearchWordService';

interface NamedParameter {
  searchText: string;
  useOption?: boolean;
}

function SearchService() {
  const setCompanyList = useSetRecoilState(companyListAtoms);
  const setIsLoading = useSetRecoilState(isLoadingAtoms);
  const setHoverIndex = useSetRecoilState(autocompleteHoverIndexAtoms);
  const governmentLocation = useRecoilValue(selectedGovernmentLocationAtoms);
  const sector = useRecoilValue(selectedSectorAtoms);
  const addRecentSearchWordService = RecentSearchWordService(RecentSearchWordEnum.ADD);

  return function postSearch({ searchText, useOption = false }: NamedParameter) {
    setHoverIndex(-1);

    setIsLoading(true);

    addRecentSearchWordService(searchText);

    search
      .post<PageResponse<Company>>('/search', {
        companyName: searchText,
        governmentLocation: useOption ? governmentLocation : null,
        sector: useOption ? sector : null,
      })
      .then((response) => setCompanyList(response.data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };
}

export default SearchService;
