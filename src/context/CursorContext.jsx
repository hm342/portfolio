import React, { useState, useCallback } from 'react';
import { CursorContext } from './CursorContextObject';

export const CursorProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorText, setCursorText] = useState('');

  const setCursor = useCallback((variant, text = '') => {
    setCursorVariant(variant);
    setCursorText(text);
  }, []);

  const resetCursor = useCallback(() => {
    setCursorVariant('default');
    setCursorText('');
  }, []);

  return (
    <CursorContext.Provider value={{ cursorVariant, cursorText, setCursor, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
};
