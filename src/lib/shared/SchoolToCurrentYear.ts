const SchoolToCurrentYear = (year: number = 1990) => {
  let currentYear = new Date().getFullYear();
  let yearsArray: number[] = [];
  while (year <= currentYear) {
    yearsArray.push(year);

    year += 1;
  }

  return yearsArray;
};

export default SchoolToCurrentYear