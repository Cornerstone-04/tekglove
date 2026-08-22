import { type FormEvent, useState } from "react";
import type { ProductAccent } from "@/content/products";
import { submitWaitlistAction } from "../actions/submit-waitlist";
import { waitlistRoleValues } from "../data/waitlist-form-options";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

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

  const submitWaitlist = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionError("");

    const formData = new FormData(event.currentTarget);
    const result = await submitWaitlistAction({
      firstName,
      lastName,
      email,
      marketingConsent: consent,
      productInterests: selectedProducts,
      intendedUse: role ? waitlistRoleValues[role] : undefined,
      countryCode: country || undefined,
      organisationName: formData.get("organisation") || undefined,
      useCase: formData.get("useCase") || undefined,
    });

    setIsSubmitting(false);

    if (result.status === "success") {
      onComplete();
      return;
    }

    setSubmissionError(result.message);
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
    firstName,
    goToStep,
    isSubmitting,
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
    submissionError,
    submitWaitlist,
    updateProductInterests,
  };
}
