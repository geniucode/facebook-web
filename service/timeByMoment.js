import moment from "moment";

const timeByMoment = (createdAt) => {
  let now = moment();
  let momentCreatedAt = moment(createdAt);
  let dayCreatedAt = moment(createdAt).format("D");
  let monthCreatedAt = moment(createdAt).format("MMM");
  let yearCreatedAt = moment(createdAt).format("YYYY");
  let diff = now.diff(momentCreatedAt);
  let diffDuration = moment.duration(diff);
  console.log(momentCreatedAt);
  let yearsDiff = diffDuration.years() + " y";
  let monthDiff = diffDuration.months() + " m";

  let weekDiff = diffDuration.weeks() + " w";
  let dayDiff = diffDuration.days() + " d";
  let hoursDiff = diffDuration.hours() + " h";
  let minDiff = diffDuration.minutes() + " m";
  let secDiff = diffDuration.seconds() + " s";

  if (yearsDiff.split("")[0] > 0) {
    return `${dayCreatedAt} ${monthCreatedAt} ${yearCreatedAt}`;
  } else if (yearsDiff.split("")[0] <= 0 && monthDiff.split("")[0] > 0) {
    return `${dayCreatedAt} ${monthCreatedAt}`;
  } else if (
    yearsDiff.split("")[0] <= 0 &&
    monthDiff.split("")[0] <= 0 &&
    weekDiff.split("")[0] > 0
  ) {
    return weekDiff;
  } else if (
    yearsDiff.split("")[0] <= 0 &&
    monthDiff.split("")[0] <= 0 &&
    weekDiff.split("")[0] <= 0 &&
    dayDiff.split("")[0] > 0
  ) {
    return dayDiff;
  } else if (
    yearsDiff.split("")[0] <= 0 &&
    monthDiff.split("")[0] <= 0 &&
    weekDiff.split("")[0] <= 0 &&
    dayDiff.split("")[0] <= 0 &&
    hoursDiff.split("")[0] > 0
  ) {
    return hoursDiff;
  } else if (
    yearsDiff.split("")[0] <= 0 &&
    monthDiff.split("")[0] <= 0 &&
    weekDiff.split("")[0] <= 0 &&
    dayDiff.split("")[0] <= 0 &&
    hoursDiff.split("")[0] <= 0 &&
    minDiff.split("")[0] > 0
  ) {
    return minDiff;
  } else if (
    yearsDiff.split("")[0] <= 0 &&
    monthDiff.split("")[0] <= 0 &&
    weekDiff.split("")[0] <= 0 &&
    dayDiff.split("")[0] <= 0 &&
    hoursDiff.split("")[0] <= 0 &&
    minDiff.split("")[0] <= 0 &&
    secDiff.split("")[0] > 0
  ) {
    return "Just now";
  } else {
    return "error";
  }
};
export { timeByMoment };
