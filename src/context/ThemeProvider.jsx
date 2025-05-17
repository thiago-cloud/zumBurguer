// arquivo: components/ThemeProvider.jsx
'use client';

import { createContext } from 'react';

export const ThemeContext = createContext(); // Contexto opcional

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ tema: 'claro' }}>
      {children}
    </ThemeContext.Provider>
  );
}