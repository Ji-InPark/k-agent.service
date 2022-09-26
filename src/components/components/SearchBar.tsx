import { css } from '@emotion/react';
import { useRef } from 'react';
import { isNullOrWhiteSpace } from '../../utils';

function SearchBar() {
  const inputElement = useRef<HTMLInputElement>(null);
  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && event.nativeEvent.isComposing === false) {
      event.preventDefault();

      const inputText = event.currentTarget.value;

      event.currentTarget.value = '';

      if (isNullOrWhiteSpace(inputText)) {
        return;
      }

      inputElement.current?.blur();
    }
  }
  return (
    <div>
      <input
        onKeyDown={onKeyDown}
        css={css({
          textAlign: 'center',
          fontSize: 42,
          marginTop: 50,
          width: 500,
          height: 50,
        })}
        type="text"
        name=""
        id=""
      />
    </div>
  );
}

export default SearchBar;
