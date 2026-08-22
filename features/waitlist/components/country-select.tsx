"use client";

import { BsCheck2, BsChevronDown } from "react-icons/bs";
import { useCountrySelect } from "../hooks/use-country-select";

type CountrySelectProps = {
  value: string;
  onChangeAction: (countryCode: string) => void;
};

export function CountrySelect({ value, onChangeAction }: CountrySelectProps) {
  const select = useCountrySelect({ value, onChange: onChangeAction });
  const activeCountry = select.filteredCountries[select.activeIndex];

  return (
    <div ref={select.containerRef} className="relative">
      <label
        id={select.labelId}
        htmlFor="waitlist-country"
        className="mb-2 block text-sm font-medium text-white"
      >
        Country
      </label>
      <input type="hidden" name="country" value={value} />
      <div className="relative">
        <input
          ref={select.inputRef}
          id="waitlist-country"
          type="text"
          role="combobox"
          aria-autocomplete="list"
          aria-controls={select.listboxId}
          aria-expanded={select.open}
          aria-activedescendant={
            select.open && activeCountry
              ? `${select.listboxId}-${activeCountry.code}`
              : undefined
          }
          autoComplete="off"
          value={select.query}
          placeholder="Search countries"
          onFocus={() => select.setOpen(true)}
          onChange={(event) => select.updateQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              select.setOpen(true);
              select.moveActiveOption(1);
            }
            if (event.key === "ArrowUp") {
              event.preventDefault();
              select.setOpen(true);
              select.moveActiveOption(-1);
            }
            if (event.key === "Enter" && select.open && activeCountry) {
              event.preventDefault();
              select.selectCountry(activeCountry);
            }
            if (event.key === "Escape") {
              event.preventDefault();
              select.closeAndRestore();
            }
          }}
          className="min-h-13 w-full rounded-xl border border-white/10 bg-white/4 px-4 pr-11 text-base text-white transition-[border-color,background-color,box-shadow] outline-none placeholder:text-white/25 hover:border-white/20 focus:border-orange/70 focus:bg-white/6 focus:shadow-[0_0_0_3px_rgba(249,115,22,0.12)]"
        />
        <button
          type="button"
          aria-label={select.open ? "Close country list" : "Open country list"}
          tabIndex={-1}
          onClick={() => {
            select.setOpen(!select.open);
            select.inputRef.current?.focus();
          }}
          className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-white/50"
        >
          <BsChevronDown
            aria-hidden="true"
            className={`text-sm transition-transform duration-200 ${select.open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {select.open && (
        <div
          id={select.listboxId}
          role="listbox"
          aria-labelledby={select.labelId}
          className="absolute z-30 mt-2 max-h-68 w-full overflow-y-auto rounded-xl border border-white/12 bg-[#111113]/96 p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl"
        >
          {select.filteredCountries.length > 0 ? (
            select.filteredCountries.map((country, index) => {
              const selected = country.code === value;
              const active = index === select.activeIndex;

              return (
                <button
                  key={country.code}
                  id={`${select.listboxId}-${country.code}`}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  tabIndex={-1}
                  onMouseEnter={() => select.setActiveIndex(index)}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => select.selectCountry(country)}
                  className={`flex min-h-11 w-full items-center justify-between gap-4 rounded-lg px-3.5 py-2.5 text-left text-sm transition-colors outline-none ${
                    selected
                      ? "bg-orange/10 text-orange"
                      : active
                        ? "bg-white/7 text-white"
                        : "text-white/70 hover:bg-white/7"
                  }`}
                >
                  <span>{country.name}</span>
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[0.65rem] text-white/30">
                      {country.code}
                    </span>
                    <BsCheck2
                      aria-hidden="true"
                      className={
                        selected ? "text-base opacity-100" : "opacity-0"
                      }
                    />
                  </span>
                </button>
              );
            })
          ) : (
            <p className="px-3.5 py-4 text-sm text-white/45">
              No countries found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
