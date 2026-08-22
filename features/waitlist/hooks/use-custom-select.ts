import { type FocusEvent, useEffect, useId, useRef, useState } from "react";

type UseCustomSelectProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
};

export function useCustomSelect({
  options,
  value,
  onChange,
  onBlur,
}: UseCustomSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const labelId = useId();
  const valueId = useId();
  const listboxId = useId();
  const selectedIndex = options.indexOf(value);

  useEffect(() => {
    if (!open) return;
    const focusIndex = selectedIndex >= 0 ? selectedIndex : 0;
    requestAnimationFrame(() => optionRefs.current[focusIndex]?.focus());
  }, [open, selectedIndex]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  const selectOption = (option: string) => {
    onChange(option);
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  const focusOption = (index: number) => {
    const wrappedIndex = (index + options.length) % options.length;
    optionRefs.current[wrappedIndex]?.focus();
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (event.currentTarget.contains(event.relatedTarget)) return;
    setOpen(false);
    onBlur?.();
  };

  return {
    containerRef,
    focusOption,
    handleBlur,
    labelId,
    listboxId,
    open,
    optionRefs,
    selectOption,
    selectedIndex,
    setOpen,
    triggerRef,
    valueId,
  };
}
