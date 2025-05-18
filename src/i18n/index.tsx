"use client";

import React, { createContext, useContext, useState } from "react";
import en from "./messages/en.json";
import ka from "./messages/ka.json";

const messages = { en, ka };

type Locale = "en" | "ka";

type I18nContextType = {
  locale: Locale;
  messages: Record<string, string>;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({
  children,
  defaultLocale = "en",
}: {
  children: React.ReactNode;
  defaultLocale?: Locale;
}) => {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  return (
    <I18nContext.Provider
      value={{ locale, setLocale, messages: messages[locale] }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }

  const t = (key: string) => context.messages[key] || key;

  return {
    t,
    locale: context.locale,
    setLocale: context.setLocale,
  };
};
