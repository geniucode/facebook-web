const DateSelector = (props) => {
  const date = new Date();
  const [currYear, currMonth, currDay, ] = [
    date.getFullYear(),
    date.getMonth()+1,
    date.getDate(),
  ];
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
  yearOptions.forEach(
    (element, index) => (yearOptions[index] = currYear - index)
  );

  const onChangeBirthDay = (event) => {
    let [year, month, day] = props.birthDay.value.split("-");
    if (isNaN(event.target.value)) {
      month = monthOptions.indexOf(event.target.value)+1;
    } else if (event.target.value <= 31) {
      day = event.target.value;
    } else {
      year = event.target.value;
    }
    props.setBirthDay({
      value: `${year}-${month}-${day}`,
      accepted: true,
    });
  };

  return (
    <div className="date-selectors-container">
      <select
        className="date-selector"
        defaultValue={monthOptions[currMonth-1]}
        onChange={onChangeBirthDay}
      >
        {monthOptions.map((monthOption) => (
          <option value={monthOption} key={monthOptions.indexOf(monthOption)}>
            {monthOption}
          </option>
        ))}
      </select>
      <select
        className="date-selector"
        defaultValue={currDay}
        onChange={onChangeBirthDay}
      >
        {dayOptions.map((dayOption) => (
          <option value={dayOption} key={dayOption}>
            {dayOption}
          </option>
        ))}
      </select>
      <select
        className="date-selector"
        defaultValue={currYear}
        onChange={onChangeBirthDay}
      >
        {yearOptions.map((yearOption) => (
          <option value={yearOption} key={yearOption}>
            {yearOption}
          </option>
        ))}
      </select>
    </div>
  );
};

export { DateSelector };
