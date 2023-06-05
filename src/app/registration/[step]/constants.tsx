export const steps = [
  { path: 'your-info', title: 'your info' },
  { path: 'select-plan', title: 'select plan' },
  { path: 'add-ons', title: 'add-ons' },
  { path: 'summary', title: 'summary' },
] as const;
export type Step = (typeof steps)[number];
