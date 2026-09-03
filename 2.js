function getDayType(date) {
  let lowercase = date.toLowerCase();
  switch (lowercase) {
    case "monday":
    case "tuesday": 
    case "wednesday":
    case "thursday":
    case "sunday":
      return "Weekday";
    case "saturday":
    case "friday":
      return "Weekend";
    default:
      return "Invalid day";
  }
}
