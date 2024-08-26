import React, { useState } from 'react';
import Select from 'react-select';

import ReactiveInput from 'Components/Shared/ReactiveInput/ReactiveInput.js';
import useReactiveInput from 'Components/Shared/ReactiveInput/useReactiveInput.js';
import useNewGroupChat from 'CustomHooks/api/useNewGroupChat.js';
import useSelectUser from 'CustomHooks/useSelectUser.js';

export default function AddGroupChat({ closeModal }) {
  const [targetUsernames, setTargetUsernames] = useState('');
  const onNewGroupChat = useNewGroupChat(closeModal);
  const { value: groupName, onChange } = useReactiveInput();
  const { options, searchedUsersLoader, setSearchKey } = useSelectUser();
  function getUsernamesFromValues() {
    return targetUsernames.map((user) => user.value);
  }
  return (
    <>
      <ReactiveInput value={groupName} onChange={onChange} />
      <Select
        options={options}
        isLoading={searchedUsersLoader}
        onInputChange={setSearchKey}
        onChange={(item) => {
          setTargetUsernames(item);
        }}
        isMulti
      />
      <button type="submit" onClick={() => onNewGroupChat(getUsernamesFromValues(), groupName)}>
        Submit
      </button>
      <button type="close" onClick={closeModal}>
        Close
      </button>
    </>
  );
}
