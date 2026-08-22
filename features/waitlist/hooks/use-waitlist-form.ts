import { type FormEvent, useState } from "react";
import type { ProductAccent } from "@/content/products";

type WaitlistStep = 1 | 2 | 3;

export function useWaitlistForm(onComplete: () => void) {
  const [step, setStep] = useState<WaitlistStep>(1);
  const [direction, setDirection] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<ProductAccent[]>([]);
  const [showProductError, setShowProductError] = useState(false);
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");

  const goToStep = (nextStep: WaitlistStep) => {
    setDirection(nextStep > step ? 1 : -1);
    setStep(nextStep);
  };

  const continueFromDetails = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    goToStep(2);
  };

  const continueFromInterests = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedProducts.length === 0) {
      setShowProductError(true);
      return;
    }
    setShowProductError(false);
    goToStep(3);
  };

  const finishPreview = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onComplete();
  };

  const updateProductInterests = (products: ProductAccent[]) => {
    setSelectedProducts(products);
    if (products.length > 0) setShowProductError(false);
  };

  return {
    consent,
    continueFromDetails,
    continueFromInterests,
    country,
    direction,
    email,
    finishPreview,
    firstName,
    goToStep,
    lastName,
    role,
    selectedProducts,
    setConsent,
    setCountry,
    setEmail,
    setFirstName,
    setLastName,
    setRole,
    showProductError,
    step,
    updateProductInterests,
  };
}
