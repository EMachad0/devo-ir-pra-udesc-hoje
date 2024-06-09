export type DayOfTheWeek =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

const daysOfTheWeek: Record<DayOfTheWeek, number> = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
};

export function isDayOfTheWeek(day: DayOfTheWeek): boolean {
  const today = new Date().getDay();
  return today === daysOfTheWeek[day];
}

export const isWeekend = (): boolean =>
  isDayOfTheWeek('saturday') || isDayOfTheWeek('sunday');

export const isWeekday = (): boolean => !isWeekend();

export const isSunday = (): boolean => isDayOfTheWeek('sunday');

export const isMonday = (): boolean => isDayOfTheWeek('monday');

export const isTuesday = (): boolean => isDayOfTheWeek('tuesday');

export const isWednesday = (): boolean => isDayOfTheWeek('wednesday');

export const isThursday = (): boolean => isDayOfTheWeek('thursday');

export const isFriday = (): boolean => isDayOfTheWeek('friday');

export const isSaturday = (): boolean => isDayOfTheWeek('saturday');
