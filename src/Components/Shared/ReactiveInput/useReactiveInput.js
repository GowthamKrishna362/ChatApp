import { useState } from "react";
import { KEY_DOWN_IDS } from "Constants/globalConstants.js";

export default function useReactiveInput({ initialValue, onSubmit } = {}) {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === KEY_DOWN_IDS.KEY_ENTER) {
      onSubmit(e.target.value);
    }
  };
  return { value, onChange, onKeyDown };
}
