import { createContext } from 'react';

export const CursorContext = createContext({
  cursorVariant: 'default',
  cursorText: '',
  setCursor: () => {},
  resetCursor: () => {}
});
