"use client";

import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

interface CountryContextType {
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
}

export const CountryContext = createContext<CountryContextType>(
  {} as CountryContextType
);

export function CountryProvider({ children }: { children: ReactNode }) {
  const [country, setCountry] = useState<string>("Company Profile");

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
}
