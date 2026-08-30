import { createElement } from 'react';

export function RevealText({ text, as = 'span', className }) {
  return createElement(as, { className }, text);
}
