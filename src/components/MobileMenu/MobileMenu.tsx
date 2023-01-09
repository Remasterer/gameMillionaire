import React, { useState } from 'react';

import './MobileMenu.scss';
import { getBemClassName } from '../../utils';

const { element } = getBemClassName('mobile-menu');

type Props = {
  children: React.ReactNode;
  containerClassName?: string;
};

export const MobileMenu = ({ children, containerClassName }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const openModifier = isOpen ? 'open' : null;

  const menuContainerClassName = element('container', openModifier) + ' ' + containerClassName;

  return (
    <>
      <span className={element('icon', openModifier)} onClick={handleToggleMenu} />
      <div className={menuContainerClassName}>{children}</div>
    </>
  );
};
