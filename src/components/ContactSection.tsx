import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Youtube, Linkedin, Phone, MessageSquare, Instagram } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useAppTheme } from '../context/ThemeContext';

export const ContactSection: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const { currentThemeConfig } = useAppTheme();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section
      id="contato"
      className="pt-24 pb-12 lg:pb-10 border-t"
      style={{
        backgroundColor: 'var(--bg-main)',
        borderColor: 'var(--border-card)',
      }}
      aria-labelledby="contatoTitle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Real Contact Information (ZERO Location) */}
          <div className="lg:col-span-5">
            <div>
              <div
                className="text-xs font-bold uppercase tracking-wider mb-2"
                style={{ color: currentThemeConfig.secondaryHex }}
              >
                Contato Direto
              </div>
              <h2 id="contatoTitle" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Vamos conversar
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                Estou à disposição para conversas sobre Engenharia de Dados, arquiteturas em nuvem AWS, desafios de tuning relacional (MySQL/Oracle), confiabilidade (SRE) e novas iniciativas em tecnologia.
              </p>

              {/* Direct Real Contact Cards */}
              <div className="mt-8 space-y-3">
                {/* Email */}
                <div
                  className="p-4 rounded-xl border flex items-center justify-between gap-3 shadow-md"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-card)',
                  }}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div
                      className="w-9 h-9 rounded-lg border flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: 'var(--bg-card-alt)',
                        borderColor: 'var(--border-card)',
                        color: currentThemeConfig.secondaryHex,
                      }}
                    >
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] text-slate-400 font-medium">E-mail Profissional</p>
                      <p className="text-sm font-mono text-white font-medium truncate">{profile.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-300 hover:text-white rounded-lg transition-colors shrink-0 text-xs flex items-center gap-1 border"
                    style={{
                      backgroundColor: 'var(--bg-card-alt)',
                      borderColor: 'var(--border-card)',
                    }}
                    title="Copiar e-mail"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5" style={{ color: currentThemeConfig.secondaryHex }} /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copiado!' : 'Copiar'}</span>
                  </button>
                </div>

                {/* Phone */}
                <div
                  className="p-4 rounded-xl border flex items-center justify-between gap-3 shadow-md"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-card)',
                  }}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div
                      className="w-9 h-9 rounded-lg border flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: 'var(--bg-card-alt)',
                        borderColor: 'var(--border-card)',
                        color: currentThemeConfig.secondaryHex,
                      }}
                    >
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 font-medium">Telefone / WhatsApp</p>
                      <p className="text-sm font-mono text-white font-medium">{profile.phone}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 text-slate-300 hover:text-white rounded-lg transition-colors shrink-0 text-xs flex items-center gap-1 border"
                    style={{
                      backgroundColor: 'var(--bg-card-alt)',
                      borderColor: 'var(--border-card)',
                    }}
                    title="Copiar telefone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5" style={{ color: currentThemeConfig.secondaryHex }} /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPhone ? 'Copiado!' : 'Copiar'}</span>
                  </button>
                </div>
              </div>

              {/* Social Channels - LinkedIn, Instagram (@bianodati), YouTube */}
              <div className="mt-8 space-y-3">
                <h3
                  className="text-xs font-semibold uppercase tracking-wider text-slate-400"
                >
                  Canais & Redes Oficiais
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* LinkedIn */}
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border transition-all flex items-center gap-3 group"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-card)',
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105"
                      style={{
                        backgroundColor: 'var(--bg-card-alt)',
                        color: currentThemeConfig.accentHex,
                      }}
                    >
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-bold text-white group-hover:underline truncate">
                        LinkedIn
                      </p>
                      <p className="text-[10px] text-slate-400 truncate">Perfil</p>
                    </div>
                  </a>

                  {/* Instagram - Added as requested */}
                  <a
                    href={profile.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border transition-all flex items-center gap-3 group"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-card)',
                    }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-pink-950/60 border border-pink-900/50 flex items-center justify-center text-pink-400 transition-transform group-hover:scale-105">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-bold text-white group-hover:underline truncate">
                        Instagram
                      </p>
                      <p className="text-[10px] text-slate-400 truncate">{profile.instagramHandle}</p>
                    </div>
                  </a>

                  {/* YouTube */}
                  <a
                    href={profile.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border transition-all flex items-center gap-3 group"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-card)',
                    }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-rose-950/60 border border-rose-900/50 flex items-center justify-center text-rose-400 transition-transform group-hover:scale-105">
                      <Youtube className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-bold text-white group-hover:underline truncate">
                        YouTube
                      </p>
                      <p className="text-[10px] text-slate-400 truncate">{profile.youtubeChannel}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7 lg:mt-[82px]">
            <div
              className="p-6 sm:p-8 rounded-2xl border shadow-2xl"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-card)',
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5" style={{ color: currentThemeConfig.secondaryHex }} />
                <h3 className="text-xl font-bold text-white">
                  Envie uma mensagem direta
                </h3>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div
                    className="w-12 h-12 rounded-full border flex items-center justify-center mx-auto"
                    style={{
                      borderColor: currentThemeConfig.secondaryHex,
                      color: currentThemeConfig.secondaryHex,
                      backgroundColor: 'var(--bg-card-alt)',
                    }}
                  >
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Mensagem Registrada!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Obrigado pelo contato, {formState.name}. Retornarei em breve no e-mail {formState.email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-white rounded-lg transition-colors"
                    style={{ backgroundColor: currentThemeConfig.accentHex }}
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Seu Nome *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Ex: Carlos Oliveira"
                        className="w-full px-3.5 py-2 text-sm rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 border transition-all"
                        style={{
                          backgroundColor: 'var(--bg-card-alt)',
                          borderColor: 'var(--border-card)',
                        }}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Seu E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="Ex: seuemail@empresa.com"
                        className="w-full px-3.5 py-2 text-sm rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 border transition-all"
                        style={{
                          backgroundColor: 'var(--bg-card-alt)',
                          borderColor: 'var(--border-card)',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Ex: Oportunidade Engenheiro de Dados / Parceria"
                      className="w-full px-3.5 py-2 text-sm rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 border transition-all"
                      style={{
                        backgroundColor: 'var(--bg-card-alt)',
                        borderColor: 'var(--border-card)',
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Escreva sua mensagem ou detalhes da proposta..."
                      className="w-full px-3.5 py-2 text-sm rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 border transition-all resize-y"
                      style={{
                        backgroundColor: 'var(--bg-card-alt)',
                        borderColor: 'var(--border-card)',
                      }}
                    />
                  </div>

                  <div className="pt-1 flex items-center justify-between">
                    <p className="text-[11px] text-slate-400">
                      * Campos obrigatórios
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-2 text-xs font-bold text-white disabled:opacity-50 rounded-xl shadow-md transition-all focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: currentThemeConfig.accentHex,
                      }}
                    >
                      {isSubmitting ? (
                        <span>Enviando...</span>
                      ) : (
                        <>
                          <span>Enviar Mensagem</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
