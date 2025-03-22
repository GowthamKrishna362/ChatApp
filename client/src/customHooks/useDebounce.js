import { useEffect } from 'react';

export default function useDebounce(debouncedQuery, callbackFn, debounceInterval) {
  useEffect(() => {
    const timeout = setTimeout(callbackFn, debounceInterval);
    return () => clearTimeout(timeout);
  }, [debouncedQuery, debounceInterval]);
}
