function describeValue(value) {
 if (value === String) {
   return "string | truthy";
 }else if (value === Number) {
   return "number | truthy";
 }
 else if (value === 0) {
   return "number | falsy";
 }
 else if (value === "") {
   return "string | falsy";
 }    
 else if (value === Boolean) {  
   return "boolean | truthy";
}

else if (value === null) {
   return "string | falsy";

}
else if (value === undefined) {
   return "undefined | falsy";
}
}
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
function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    }
    if (username.includes(" ")) {
        return "No Space Allowed";
    }
    if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }
    return "Available";
}
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;

    if (distance > 2) {
        fare += (distance - 2) * 15;
    }

    fare += waitingMinutes * 2;

    if (isNight) {
        fare *= 1.20;
    }

    return fare;
}
const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }

    if (ballsLeft <= 0) {
        return "Lost";
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;

    let verdict;

    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
