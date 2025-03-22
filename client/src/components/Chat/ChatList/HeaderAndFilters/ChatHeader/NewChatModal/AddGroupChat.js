import React, { useState } from "react";
import Select from "react-select";

import ReactiveInput from "@components/Shared/ReactiveInput/ReactiveInput.js";
import useReactiveInput from "@customHooks/useReactiveInput.js";
import useNewGroupChat from "@customHooks/api/useNewGroupChat.js";
import useSelectUser from "@customHooks/useSelectUser.js";

export default function AddGroupChat({ closeModal }) {
  const [targetUsernames, setTargetUsernames] = useState("");
  const onNewGroupChat = useNewGroupChat(closeModal);
  const { value: groupName, onChange } = useReactiveInput();
  const { options, searchedUsersLoader, setSearchKey } = useSelectUser();
  function getUsernamesFromValues() {
    return targetUsernames.map((user) => user.value);
  }
  return (
    <>
      <ReactiveInput placeholder="Enter group name" value={groupName} onChange={onChange} />
      <Select
        options={options}
        isLoading={searchedUsersLoader}
        onInputChange={setSearchKey}
        onChange={(item) => {
          setTargetUsernames(item);
        }}
        isMulti
        placeholder="Enter usernames"
      />
      <button type="submit" onClick={() => onNewGroupChat(getUsernamesFromValues(), groupName)}>
        Submit
      </button>
    </>
  );
}
