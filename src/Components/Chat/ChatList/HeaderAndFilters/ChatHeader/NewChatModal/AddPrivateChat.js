import React, { useState } from 'react';
import Select from 'react-select';

import useNewPrivateChat from 'CustomHooks/api/useNewPrivateChat.js';
import useSelectUser from 'CustomHooks/useSelectUser.js';

export default function AddPrivateChat({ closeModal }) {
  const [targetUsername, setTargetUsername] = useState('');
  const onNewChat = useNewPrivateChat(closeModal);
  const { options, searchedUsersLoader, setSearchKey } = useSelectUser();
  return (
    <>
      <Select
        options={options}
        isLoading={searchedUsersLoader}
        onInputChange={setSearchKey}
        onChange={(item) => {
          setTargetUsername(item.value);
        }}
        placeholder="Enter username"
      />
      <button type="submit" onClick={() => onNewChat(targetUsername)}>
        Submit
      </button>
    </>
  );
}
