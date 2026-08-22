"use client";

import { BsCheck2, BsChevronDown } from "react-icons/bs";
import { useCustomSelect } from "../hooks/use-custom-select";

type CustomSelectProps = {
  label: string;
  name: string;
  options: string[];
  value: string;
  placeholder?: string;
  onChangeAction: (value: string) => void;
  onBlurAction?: () => void;
};

export function CustomSelect({
  label,
  name,
  options,
  value,
  placeholder = "Select an option",
  onChangeAction,
  onBlurAction,
}: CustomSelectProps) {
  const select = useCustomSelect({
    options,
    value,
    onChange: onChangeAction,
    onBlur: onBlurAction,
  });

  return (
    <div
      ref={select.containerRef}
      className="relative"
      onBlur={select.handleBlur}
    >
      <label
        id={select.labelId}
        className="mb-2 block text-sm font-medium text-white"
      >
        {label}
      </label>
      <input type="hidden" name={name} value={value} />
      <button
        ref={select.triggerRef}
        type="button"
        aria-labelledby={`${select.labelId} ${select.valueId}`}
        aria-haspopup="listbox"
        aria-controls={select.listboxId}
        aria-expanded={select.open}
        onClick={() => select.setOpen(!select.open)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            select.setOpen(true);
          }
        }}
        className="pressable flex min-h-13 w-full items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/4 px-4 text-left text-base transition-[border-color,background-color,box-shadow] outline-none hover:border-white/20 focus-visible:border-orange/70 focus-visible:bg-white/6 focus-visible:shadow-[0_0_0_3px_rgba(249,115,22,0.12)]"
      >
        <span
          id={select.valueId}
          className={value ? "text-white" : "text-white/25"}
        >
          {value || placeholder}
        </span>
        <BsChevronDown
          aria-hidden="true"
          className={`shrink-0 text-sm text-white/50 transition-transform duration-200 ${select.open ? "rotate-180" : ""}`}
        />
      </button>

      {select.open && (
        <div
          id={select.listboxId}
          role="listbox"
          aria-labelledby={select.labelId}
          className="absolute z-30 mt-2 w-full overflow-hidden rounded-xl border border-white/12 bg-[#111113]/96 p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl"
        >
          {options.map((option, index) => {
            const selected = option === value;

            return (
              <button
                key={option}
                ref={(element) => {
                  select.optionRefs.current[index] = element;
                }}
                type="button"
                role="option"
                aria-selected={selected}
                tabIndex={
                  index ===
                  (select.selectedIndex >= 0 ? select.selectedIndex : 0)
                    ? 0
                    : -1
                }
                onClick={() => select.selectOption(option)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    select.focusOption(index + 1);
                  }
                  if (event.key === "ArrowUp") {
                    event.preventDefault();
                    select.focusOption(index - 1);
                  }
                  if (event.key === "Home") {
                    event.preventDefault();
                    select.focusOption(0);
                  }
                  if (event.key === "End") {
                    event.preventDefault();
                    select.focusOption(options.length - 1);
                  }
                  if (event.key === "Escape") {
                    event.preventDefault();
                    select.setOpen(false);
                    select.triggerRef.current?.focus();
                  }
                }}
                className={`flex min-h-11 w-full items-center justify-between gap-4 rounded-lg px-3.5 py-2.5 text-left text-sm transition-colors outline-none hover:bg-white/7 focus-visible:bg-white/7 ${
                  selected ? "bg-orange/10 text-orange" : "text-white/70"
                }`}
              >
                <span>{option}</span>
                <BsCheck2
                  aria-hidden="true"
                  className={selected ? "text-base opacity-100" : "opacity-0"}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
