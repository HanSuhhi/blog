export function getMonthAbbreviation(month: number): string {
  const monthAbbreviations = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

  return monthAbbreviations[month] || monthAbbreviations[0];
}
