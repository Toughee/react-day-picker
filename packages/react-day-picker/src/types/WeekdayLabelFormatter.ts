/**
 * Represent a function to format the ARIA label for the Head component.
 */
export type WeekdayLabelFormatter = (
  day: Date,
  options?: { locale?: Locale }
) => string;
