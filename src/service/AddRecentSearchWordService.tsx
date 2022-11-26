import { useRecoilState } from 'recoil';
import { recentSearchWordsAtoms } from '../recoil/atoms';

function AddRecentSearchWordService() {
  const [recentSearchWords, setRecentSearchWords] = useRecoilState(recentSearchWordsAtoms);

  return function (searchText: string) {
    if (searchText in recentSearchWords) return;

    const words = [searchText, ...recentSearchWords];

    if (words.length > 3) words.pop();

    setRecentSearchWords(words);
  };
}

export default AddRecentSearchWordService;
