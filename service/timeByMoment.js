import moment from "moment";

const timeByMoment = (createdAt) => {
  let now = moment();
  let momentCreatedAt = moment(createdAt);
  let diff = now.diff(momentCreatedAt);
  let diffDuration = moment.duration(diff);

  let yearsDiff = diffDuration.years()+" y";
  let monthDiff = diffDuration.months() + " m";
  let weekDiff = diffDuration.weeks() + " w";
  let dayDiff = diffDuration.days() + " d";
  let hoursDiff = diffDuration.hours() + " hrs";
  let minDiff = diffDuration.minutes() + " s";
//   if(5<yearsDiff.split('')[0])
//   console.log({"yearsDiff":yearsDiff.split('')[0]})
  

  if (yearsDiff.split('')[0] > 0) {
     return yearsDiff;
    console.log(" is years" );
  } else if (yearsDiff.split('')[0] <= 0 && monthDiff.split('')[0] > 0) {
     return monthDiff;
    console.log(" is month "  );
  } else if (yearsDiff.split('')[0] <= 0 && monthDiff.split('')[0] <= 0 && weekDiff.split('')[0] > 0) {
    return weekDiff;
    console.log(" is week" );
  } else if (yearsDiff.split('')[0] <= 0 && monthDiff.split('')[0] <= 0 && weekDiff.split('')[0] <= 0 && dayDiff.split('')[0] > 0) {
    return dayDiff;
    console.log(" is day");
  } else if (
    yearsDiff.split('')[0] <= 0 &&
    monthDiff.split('')[0] <= 0 &&
    weekDiff.split('')[0] <= 0 &&
    dayDiff.split('')[0] <= 0 &&
    hoursDiff.split('')[0] > 0
  ) {
    return hoursDiff;
    console.log(" is hours" );
  } else if (
    yearsDiff.split('')[0] <= 0 &&
    monthDiff.split('')[0] <= 0 &&
    weekDiff.split('')[0] <= 0 &&
    dayDiff.split('')[0] <= 0 &&
    hoursDiff.split('')[0] <= 0 &&
    minDiff.split('')[0] > 0
  ) {
    return minDiff;
    console.log(" is years"  );
  } else {
    return 1000;
    console.log(" is" );
  }
};
export { timeByMoment };
