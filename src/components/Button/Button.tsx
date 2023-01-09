import './Button.scss';
import React from 'react';
import { getBemClassName } from '../../utils';

const { block } = getBemClassName('button');

type Props = {
  children: React.ReactNode;
  className?: string;
  type?: 'hexagon';
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({ children, type, disabled, className = '', onClick }: Props) => {
  return (
    <button
      className={`${block(type ? type : null)} ${className}`}
      disabled={disabled}
      onClick={onClick}
      data-testid="button-test-id"
    >
      {children}
    </button>
  );
};
