function normalizeHour(timeInterval: string): string {
  if (
    timeInterval[0] === "0" ||
    timeInterval[0] === "1" ||
    timeInterval[0] === "2"
  ) {
    return timeInterval;
  }
  return "0" + timeInterval;
}

function sortIntervals(a: string, b: string): number {
  const normalized_a = normalizeHour(a);
  const normalized_b = normalizeHour(b);

  const hour_a: number = Number(normalized_a[0] + normalized_a[1]);
  const minute_a: number = Number(normalized_a[3] + normalized_a[4]);

  const hour_b: number = Number(normalized_b[0] + normalized_b[1]);
  const minute_b: number = Number(normalized_b[3] + normalized_b[4]);

  if (hour_a < hour_b) {
    return -1;
  }
  if (hour_a === hour_b && minute_a < minute_b) {
    return -1;
  }
  return 1;
}

function sortTimetableDays(cabinets: any) {
  const filler = {
    Subject: "",
    EducatorsDisplayText: "",
    TimeIntervalString: "",
  };
  const weekdays: any = [];

  for (let i = 0; i < 6; i++) {
    const timeIntervalsSet: Set<string> = new Set();

    weekdays.push([]);

    for (let j = 0; j < cabinets.length; j++) {
      for (let h = 0; h < cabinets[j][i].DayStudyEvents.length; h++) {
        timeIntervalsSet.add(
          cabinets[j][i].DayStudyEvents[h].TimeIntervalString
        );
      }

      weekdays[i].push(cabinets[j][i].DayStudyEvents);
    }

    const timeIntervals: string[] = Array.from(
      timeIntervalsSet
    ).sort((a: string, b: string) => sortIntervals(a, b));

    const fillers = [];
    for (let h = 0; h < timeIntervals.length; h++) {
      fillers.push(filler);
    }

    for (let h = 0; h < weekdays[i].length; h++) {
      let didReachInterval = false;

      console.log(weekdays[i][h]);
      for (let v = 0; v < timeIntervals.length; v++) {
        if (weekdays[i][h][v]) {
          if (timeIntervals[v] === weekdays[i][h][v].TimeIntervalString) {
            didReachInterval = true;
          } else {
            if (didReachInterval) {
              weekdays[i][h].splice(v, 0, filler);
            } else {
              if (weekdays[i][h].length < timeIntervals.length) {
                weekdays[i][h].splice(v - 1, 0, filler);
              }
            }
          }
        } else {
          weekdays[i][h].push(filler);
        }
      }
    }

    weekdays[i] = [[...timeIntervals], weekdays[i]];
  }

  console.log(weekdays);
  return weekdays;
}

export default sortTimetableDays;
