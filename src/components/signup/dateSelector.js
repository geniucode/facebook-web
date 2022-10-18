const isValidDate = (m, d, y) => {
  return (
    m > 0 &&
    m < 13 &&
    y &&
    y.length === 4 &&
    d > 0 &&
    d <= new Date(y, m, 0).getDate()
  );
};

const DateSelector = (props) => {
  const currDate = new Date();
  let month, day, year = currDate.getFullYear();
  const monthOptions = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayOptions = new Array(31).fill(0);
  dayOptions.forEach((element, index) => (dayOptions[index] = index + 1));
  const yearOptions = new Array(118).fill(0);
  yearOptions.forEach((element, index) => (yearOptions[index] = year - index));

  const onChangeBirthDay = (event) => {
    if (isNaN(event.target.value)) {
      month = monthOptions.indexOf(event.target.value) + 1;
    } else if (event.target.value <= 31) {
      day = event.target.value;
    } else {
      year = event.target.value;
    }
    if (isValidDate(month, day, year)) {
      props.setBirthDay(new Date(`${month}/${day}/${year}`));
    } else {
      console.log("Invalid date");
    }
  };

  return (
    <div className="date-selectors-container">
      <select className="date-selector" onChange={onChangeBirthDay}>
        <option value={"None"} key={-1}></option>
        {monthOptions.map((monthOption) => (
          <option value={monthOption} key={monthOptions.indexOf(monthOption)}>
            {monthOption}
          </option>
        ))}
      </select>
      <select className="date-selector" onChange={onChangeBirthDay}>
        <option value={"None"} key={-1}></option>
        {dayOptions.map((dayOption) => (
          <option value={dayOption} key={dayOptions.indexOf(dayOption)}>
            {dayOption}
          </option>
        ))}
      </select>
      <select className="date-selector" onChange={onChangeBirthDay}>
        <option value={"None"} key={-1}></option>
        {yearOptions.map((yearOption) => (
          <option value={yearOption} key={yearOptions.indexOf(yearOption)}>
            {yearOption}
          </option>
        ))}
      </select>
    </div>
  );
};

export { DateSelector };
