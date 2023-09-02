export const getCurrentDate = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const today = new Date();
  const currentDay = today.getUTCDay();

  // Set the time zone offset to UTC+3 (EEST)
  const timeZoneOffset = 3 * 60;

  const weekDates = daysOfWeek.map((day, index) => {
    const offset = index - currentDay + 1;
    const date = new Date(today);

    // Adjust the date and time based on the time zone offset
    date.setUTCMinutes(date.getUTCMinutes() + timeZoneOffset);
    date.setUTCDate(today.getUTCDate() + offset);

    const dd = String(date.getUTCDate()).padStart(2, '0');
    const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
    const yyyy = date.getUTCFullYear();
    return { name: day, date: `${yyyy}-${mm}-${dd}` };
  });

  return weekDates;
};

export function navigateToDay(router, day) {
  router.push({ name: 'day', params: { dayName: day.date } });
}
