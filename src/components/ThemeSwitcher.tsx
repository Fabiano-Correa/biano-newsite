import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';
import { useAppTheme, THEME_OPTIONS, AppTheme } from '../context/ThemeContext';

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, currentThemeConfig } = useAppTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-offset-1"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-card)',
          color: 'var(--text-platinum)',
        }}
        title="Alterar Paleta de Cores"
        aria-expanded={isOpen}
      >
        <span
          className="w-3 h-3 rounded-full flex-shrink-0 border border-white/20 shadow-sm"
          style={{ backgroundColor: currentThemeConfig.accentHex }}
        />
        <span className="hidden sm:inline">{currentThemeConfig.name}</span>
        <Palette className="w-3.5 h-3.5 opacity-80" />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-72 sm:w-80 rounded-2xl shadow-2xl border p-2 z-50 animate-in fade-in zoom-in-95 duration-150"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-card)',
          }}
        >
          <div className="px-3 py-2 border-b mb-1.5" style={{ borderColor: 'var(--border-card)' }}>
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Paletas de Identidade Visual
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Escolha a combinação de cores do site institucional
            </p>
          </div>

          <div className="space-y-1">
            {THEME_OPTIONS.map((opt) => {
              const isSelected = theme === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    setTheme(opt.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start justify-between gap-3 ${
                    isSelected ? 'ring-1' : 'hover:bg-white/5'
                  }`}
                  style={{
                    backgroundColor: isSelected ? 'rgba(255,255,255,0.06)' : 'transparent',
                    borderColor: isSelected ? opt.accentHex : 'transparent',
                  }}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center -space-x-1">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-white/30"
                          style={{ backgroundColor: opt.bgHex }}
                        />
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-white/30"
                          style={{ backgroundColor: opt.accentHex }}
                        />
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-white/30"
                          style={{ backgroundColor: opt.secondaryHex }}
                        />
                      </div>
                      <span className="text-xs font-bold text-white">
                        {opt.name}
                      </span>
                    </div>

                    <p className="text-[10px] text-slate-400 leading-tight">
                      {opt.description}
                    </p>
                  </div>

                  {isSelected && (
                    <Check
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: opt.accentHex }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
