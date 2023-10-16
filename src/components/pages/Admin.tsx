import React, { ChangeEvent, useState } from 'react';
import { css } from '@emotion/react';
import search from '../../axios';
import { useRecoilState } from 'recoil';
import { isLoadingAtoms } from '../../recoil/atoms';
import LoadingModal from '../common/modal/LoadingModal';

function Admin() {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useRecoilState(isLoadingAtoms);

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'olive',
        padding: '20px',
        gap: '20px',
      })}
    >
      <h2 css={css({ marginBottom: '20px', color: 'white' })}>병역일터 정보 업데이트 페이지</h2>
      <div>
        <label htmlFor="password" css={css({ color: 'white' })}>
          비밀번호:
        </label>
        <input type={'password'} id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div>
        <button
          disabled={!password}
          onClick={() => {
            setIsLoading(true);
            const formData = new FormData();
            formData.append(
              'items',
              new Blob(
                [
                  JSON.stringify({
                    name: 'Book',
                    quantity: '12',
                  }),
                ],
                {
                  type: 'application/json',
                },
              ),
            );
            formData.append('password', password);
            search
              .post('company', formData)
              .then((response) => {
                const count = response.data.companyCount;
                alert(count ? count : response.data);
              })
              .finally(() => setIsLoading(false));
          }}
        >
          업데이트
        </button>
      </div>
      {isLoading && <LoadingModal />}
    </div>
  );
}

export default Admin;
