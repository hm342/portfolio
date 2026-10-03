import { useContext } from 'react';
import { CursorContext } from '../context/CursorContextObject';

export const useCursor = () => useContext(CursorContext);
