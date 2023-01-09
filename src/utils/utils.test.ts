import { getBemClassName } from './bemClass';

describe('getBemClassName', () => {
  it('should return block function which returns class name with modifiers', () => {
    const { block } = getBemClassName('test-block');
    expect(block()).toBe('test-block');
    expect(block('test-modifier')).toBe('test-block test-block--test-modifier');
  });

  it('should return element function which returns class name with block prefix and with modifiers', () => {
    const { element } = getBemClassName('test-block');
    expect(element('item')).toBe('test-block__item');
    expect(element('item', 'test-modifier')).toBe(
      'test-block__item test-block__item--test-modifier'
    );
  });
});
