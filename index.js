const DateHelper = ({ date, format, divider, yearDigits }) => {
  let receivedDate = new Date(date.replace(/-/g, "/").replace(/T.+/, ""));
  console.log(receivedDate);
  console.log(receivedDate);

  let newDateString = "";
  let dividerSent = divider || "/";
  let day = receivedDate.getDate();
  if (day <= 9) {
    day = `0${receivedDate.getDate()}`;
  }
  let month = receivedDate.getMonth() + 1;
  if (month <= 9) {
    month = `0${receivedDate.getMonth()}`;
  }
  let year = receivedDate.getFullYear();
  if (yearDigits === "short") {
    year = receivedDate.getFullYear().toString().substr(-2);
  }

  switch (format) {
    case "DDMMYYYY":
      newDateString = `${day}${dividerSent}${month}${dividerSent}${year}`;
      break;
    case "MMDDYYYY":
      newDateString = `${month}${dividerSent}${day}${dividerSent}${year}`;
      break;
    case "MMYYYY":
      newDateString = `${month}${dividerSent}${year}`;
      break;
    case "DDMM":
      newDateString = `${day}${dividerSent}${month}`;
      break;
    case "MMDD":
      newDateString = `${month}${dividerSent}${day}`;
      break;
    case "MM":
      newDateString = `${month}`;
      break;
    case "DD":
      newDateString = `${day}`;
      break;
    case "YYYY":
      newDateString = `${year}`;
      break;
    default:
      newDateString = `${day}/${month}/${year}`;
  }

  return newDateString;
};

export default DateHelper;
