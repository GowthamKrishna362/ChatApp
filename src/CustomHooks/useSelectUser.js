import { useCallback, useState } from 'react';

import { DEBOUNCE_INTERVAL } from 'Constants/globalConstants.js';
import useDebounce from 'CustomHooks/useDebounce.js';
import { useLazyGetUsersByPrefixQuery } from 'features/apiSlice.js';

export default function useSelectUser() {
  const [searchKey, setSearchKey] = useState('');
  const trimmedSearchKey = searchKey.trim();
  const [triggerSearch, { data: users, loader }] = useLazyGetUsersByPrefixQuery();
  const debounceCallback = useCallback(() => {
    if (trimmedSearchKey) triggerSearch(trimmedSearchKey);
  }, [searchKey]);

  useDebounce(searchKey, debounceCallback, DEBOUNCE_INTERVAL);

  const options = (users || []).map((user) => ({
    value: user.username,
    label: user.username,
  }));
  return {
    options,
    loader,
    setSearchKey,
  };
}
