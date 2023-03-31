const DateHelper = ({ date, format, divider }) => {
  const receivedDate = new Date(date);
  let newDateString = "";
  let dividerSent = divider || "/";
  const day = receivedDate.getDate();
  const month = receivedDate.getMonth();
  const year = receivedDate.getFullYear();

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
