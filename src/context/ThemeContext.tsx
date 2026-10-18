import React, { createContext, useContext, useState, useEffect } from 'react';

export type AppTheme = 'emerald' | 'blue' | 'ultraviolet';

export interface ThemeOption {
  id: AppTheme;
  name: string;
  badge: string;
  description: string;
  bgHex: string;
  accentHex: string;
  secondaryHex: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'ultraviolet',
    name: 'Especialista em Dados & SRE',
    badge: 'Chumbo, Roxo & Verde Neon',
    description: 'Fundo Grafite Chumbo (#212529, 60%), Linhas e Blocos em Roxo Ultravioleta (#651FFF, 30%), Sucesso em Verde Esmeralda (#00E676, 10%) e Branco Gelo (#ECEFF1).',
    bgHex: '#212529',
    accentHex: '#651FFF',
    secondaryHex: '#00E676',
  },
  {
    id: 'emerald',
    name: 'Verde Original',
    badge: 'Fundo Escuro & Tons em Verde',
    description: 'Fundo escuro obsidiana (#0b0f0d), tons em Verde Esmeralda (#10b981) e marcadores laranja (#f97316).',
    bgHex: '#0b0f0d',
    accentHex: '#10b981',
    secondaryHex: '#f97316',
  },
  {
    id: 'blue',
    name: 'Azul Executivo',
    badge: 'Cloud & Corporativo',
    description: 'Fundo dark slate (#090d16), azul elétrico (#3b82f6) e acentos em anil/ouro (#38bdf8).',
    bgHex: '#090d16',
    accentHex: '#3b82f6',
    secondaryHex: '#38bdf8',
  },
];

interface ThemeContextType {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
  currentThemeConfig: ThemeOption;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<AppTheme>(() => {
    const saved = localStorage.getItem('fabiano_portfolio_theme');
    if (saved === 'emerald' || saved === 'blue' || saved === 'ultraviolet') {
      return saved;
    }
    // Default to the new specialized Ultraviolet palette or Emerald
    return 'ultraviolet';
  });

  const setTheme = (newTheme: AppTheme) => {
    setThemeState(newTheme);
    localStorage.setItem('fabiano_portfolio_theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const currentThemeConfig =
    THEME_OPTIONS.find((t) => t.id === theme) || THEME_OPTIONS[0];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentThemeConfig }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used within a ThemeProvider');
  }
  return context;
};
