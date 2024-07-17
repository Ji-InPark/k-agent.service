import { useSearchParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { autocompleteHoverIndexAtoms, companyResponseAtoms, isLoadingAtoms, selectedGovernmentLocationAtoms, selectedSectorAtoms } from '@atoms/atoms';
import search from '@/axios';
import RecentSearchWordService from '@/service/RecentSearchWordService';
import { Company, PageResponse, RecentSearchWordEnum } from '@/types';

interface NamedParameter {
  searchText: string;
  useOption?: boolean;
  page?: number;
}

function useCompany() {
  const setCompanyResponse = useSetRecoilState(companyResponseAtoms);
  const setIsLoading = useSetRecoilState(isLoadingAtoms);
  const setHoverIndex = useSetRecoilState(autocompleteHoverIndexAtoms);
  const governmentLocation = useRecoilValue(selectedGovernmentLocationAtoms);
  const sector = useRecoilValue(selectedSectorAtoms);
  const addRecentSearchWordService = RecentSearchWordService(RecentSearchWordEnum.ADD);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchCompany = ({ searchText, useOption = false, page = 0 }: NamedParameter) => {
    setHoverIndex(-1);

    setIsLoading(true);

    addRecentSearchWordService(searchText);

    searchParams.set('searchText', searchText);
    searchParams.set('useOption', useOption.toString());
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);

    search
      .post<PageResponse<Company>>('/search', {
        companyName: searchText,
        governmentLocation: useOption ? governmentLocation : null,
        sector: useOption ? sector : null,
        page,
      })
      .then((response) => setCompanyResponse(response.data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  const changePage = (page: number) => {
    const searchText = searchParams.get('searchText') || '';
    const useOption = searchParams.get('useOption') === 'true';

    searchCompany({ searchText, useOption, page });
  };

  return { searchCompany, changePage };
}

export default useCompany;
