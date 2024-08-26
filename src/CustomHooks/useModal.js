import { useState } from 'react';

export default function useModal() {
  const defaultStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const [isOpen, setIsOpen] = useState();
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return { isOpen, openModal, closeModal, defaultStyles };
}
