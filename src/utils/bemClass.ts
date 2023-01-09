type Modifiers = (string | null)[];

type GetBemClassName = {
  block: (...modifiers: Modifiers) => string;
  element: (className: string, ...modifiers: Modifiers) => string;
};
export const getClassName = (className: string, ...modifiers: Modifiers): string => {
  const modifiersClasses = modifiers.map((modifier) =>
    modifier ? `${className}--${modifier}` : ''
  );

  return [className, ...modifiersClasses].join(' ');
};

export const getBemClassName = (blockClassName: string): GetBemClassName => {
  return {
    block: (...modifiers: Modifiers) => getClassName(blockClassName, ...modifiers),
    element: (elementClassName: string, ...elementModifiers: Modifiers) =>
      getClassName(`${blockClassName}__${elementClassName}`, ...elementModifiers)
  };
};
