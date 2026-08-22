import countries from "country-list/data.json";

export type Country = {
  code: string;
  name: string;
};

function normalizeCountryName(name: string) {
  return name.replace(/ \(the\)$/i, "");
}

export const countryOptions = (countries as Country[])
  .map((country) => ({
    ...country,
    name: normalizeCountryName(country.name),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export function filterCountries(query: string, selectedName?: string) {
  const normalizedQuery = query.trim().toLocaleLowerCase();

  if (!normalizedQuery || selectedName === query) return countryOptions;

  return countryOptions.filter(
    (country) =>
      country.name.toLocaleLowerCase().includes(normalizedQuery) ||
      country.code.toLocaleLowerCase().startsWith(normalizedQuery),
  );
}
