import { useState } from "react";

export default function useReactiveInput({ initialValue } = {}) {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    console.log(e);
    setValue(e.target.value)};
  return { value, onChange };
}
