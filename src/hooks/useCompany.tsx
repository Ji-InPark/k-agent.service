import search from '../axios';
import { Company, PageResponse, RecentSearchWordEnum } from '../types';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { autocompleteHoverIndexAtoms, companyListAtoms, isLoadingAtoms, selectedGovernmentLocationAtoms, selectedSectorAtoms } from '../recoil/atoms';
import RecentSearchWordService from '../service/RecentSearchWordService';

interface NamedParameter {
  searchText: string;
  useOption?: boolean;
  page?: number;
}

function useCompany() {
  const setCompanyList = useSetRecoilState(companyListAtoms);
  const setIsLoading = useSetRecoilState(isLoadingAtoms);
  const setHoverIndex = useSetRecoilState(autocompleteHoverIndexAtoms);
  const governmentLocation = useRecoilValue(selectedGovernmentLocationAtoms);
  const sector = useRecoilValue(selectedSectorAtoms);
  const addRecentSearchWordService = RecentSearchWordService(RecentSearchWordEnum.ADD);

  const searchCompany = ({ searchText, useOption = false, page = 0 }: NamedParameter) => {
    setHoverIndex(-1);

    setIsLoading(true);

    addRecentSearchWordService(searchText);

    search
      .post<PageResponse<Company>>('/search', {
        companyName: searchText,
        governmentLocation: useOption ? governmentLocation : null,
        sector: useOption ? sector : null,
        page,
      })
      .then((response) => setCompanyList(response.data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return { searchCompany };
}

export default useCompany;
