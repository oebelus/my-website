export const formatDate = (date: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date(date);
  return d.getDay() + " " + months[d.getMonth()] + " " + d.getFullYear();
};

export const getDate = () => {
  const birth = new Date(2000, 5, 2);
  const currentDate = new Date();

  let year = currentDate.getFullYear() - birth.getFullYear();
  let month = currentDate.getMonth() - birth.getMonth();
  let day = currentDate.getDate() - birth.getDate();

  if (month < 0) {
    year--;
    month += 12;
  }

  if (day < 0) {
    month--;
    const daysInPreviousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    day += daysInPreviousMonth;
  }
  return { year, month, day };
};
