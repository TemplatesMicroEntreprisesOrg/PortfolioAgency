"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface FormContextType {
  submittedMessage: string;
  showPopupConfirmation: boolean;
  showPopupError: boolean;
  setSubmittedMessage: (message: string) => void;
  setShowPopupConfirmation: (show: boolean) => void;
  setShowPopupError: (show: boolean) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
  const [submittedMessage, setSubmittedMessage] = useState("");
  const [showPopupConfirmation, setShowPopupConfirmation] = useState(false);
  const [showPopupError, setShowPopupError] = useState(false);

  return (
    <FormContext.Provider
      value={{
        submittedMessage,
        showPopupConfirmation,
        showPopupError,
        setSubmittedMessage,
        setShowPopupConfirmation,
        setShowPopupError,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
}
