import React, { ChangeEvent, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import search from '../../axios';
import { useRecoilState } from 'recoil';
import { isLoadingAtoms } from '../../recoil/atoms';
import LoadingModal from '../common/modal/LoadingModal';

function Admin() {
  const [strings, setStrings] = useState<Array<string>>([]);
  const [selectedString, setSelectedString] = useState('');
  const [password, setPassword] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingAtoms);

  useEffect(() => {
    search.get<Array<string>>('/serviceTypes').then((response) => {
      setStrings(response.data);
    });
  }, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

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
        <input type="file" id="file" onChange={handleFileChange} />
      </div>
      <select
        onChange={(e) => {
          setSelectedString(e.target.value);
        }}
      >
        <option
          css={css({
            textAlign: 'center',
          })}
          value=""
        >
          선택
        </option>
        {strings.map((str) => {
          return (
            <option css={css({ textAlign: 'center' })} key={str} value={str}>
              {str}
            </option>
          );
        })}
      </select>
      <div>
        <label htmlFor="password" css={css({ color: 'white' })}>
          비밀번호:
        </label>
        <input type={'password'} id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div>
        <button
          disabled={!selectedFile || !password || !selectedString}
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
            formData.append('file', selectedFile as File);
            formData.append('password', password);
            formData.append('serviceType', selectedString);
            search
              .post('company', formData)
              .then((response) => {
                const count = response.data.companyCount;
                alert(count ? count : response.data);
              })
              .finally(() => setIsLoading(false));
          }}
        >
          Upload File
        </button>
      </div>
      {isLoading && <LoadingModal />}
    </div>
  );
}

export default Admin;
