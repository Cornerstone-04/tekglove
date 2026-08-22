import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  countryOptions,
  filterCountries,
  type Country,
} from "../utils/countries";

type UseCountrySelectProps = {
  value: string;
  onChange: (countryCode: string) => void;
};

export function useCountrySelect({ value, onChange }: UseCountrySelectProps) {
  const selectedCountry = countryOptions.find(
    (country) => country.code === value,
  );
  const [query, setQuery] = useState(selectedCountry?.name ?? "");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxId = useId();
  const labelId = useId();

  const filteredCountries = useMemo(
    () => filterCountries(query, selectedCountry?.name),
    [query, selectedCountry?.name],
  );

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
        if (!value) setQuery("");
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [value]);

  const selectCountry = (country: Country) => {
    onChange(country.code);
    setQuery(country.name);
    setOpen(false);
    setActiveIndex(0);
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const moveActiveOption = (direction: 1 | -1) => {
    if (filteredCountries.length === 0) return;

    setActiveIndex((current) => {
      const next = current + direction;
      if (next < 0) return filteredCountries.length - 1;
      if (next >= filteredCountries.length) return 0;
      return next;
    });
  };

  const updateQuery = (nextQuery: string) => {
    setQuery(nextQuery);
    onChange("");
    setActiveIndex(0);
    setOpen(true);
  };

  const closeAndRestore = () => {
    setOpen(false);
    setQuery(selectedCountry?.name ?? "");
  };

  return {
    activeIndex,
    closeAndRestore,
    containerRef,
    filteredCountries,
    inputRef,
    labelId,
    listboxId,
    moveActiveOption,
    open,
    query,
    selectCountry,
    selectedCountry,
    setActiveIndex,
    setOpen,
    updateQuery,
  };
}
