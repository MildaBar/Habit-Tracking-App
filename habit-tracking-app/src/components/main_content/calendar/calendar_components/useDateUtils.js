export const getCurrentDate = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const today = new Date();

  const weekDates = daysOfWeek.map((day, index) => {
    const date = new Date(today);

    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDay()).padStart(2, '0');

    return { name: day, date: `${yyyy}-${mm}-${dd}` };
  });

  return weekDates;
};

export function navigateToDay(router, day) {
  router.push({ name: 'day', params: { dayName: day.date } });
}
