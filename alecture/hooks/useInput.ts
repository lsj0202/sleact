import { useCallback, useState } from 'react';

const useInput = <T = any>(initData: T): [T, (e: any) => void] => {
  const [value, setValue] = useState(initData);
  const handleChange = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);

  return [value, handleChange];
};

export default useInput;
