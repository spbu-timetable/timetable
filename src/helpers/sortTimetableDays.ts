import Event from "../types/Event";

function normalizeHour(timeInterval: string): string {
  if (timeInterval[0] === "0" || timeInterval[0] === "1" || timeInterval[0] === "2") {
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

function sortTimetableDays(cabinets: any, type: "cabinet" | "group") {
  const filler: Event = {
    main: [],
    extra: [],
    interval: "",
  };
  const weekdays: any = [];
  for (let i = 0; i < 6; i++) {
    const timeIntervalsSet: Set<string> = new Set();

    weekdays.push([]);
    for (let j = 0; j < cabinets.length; j++) {
      for (let h = 0; h < cabinets[j][i].DayStudyEvents.length; h++) {
        timeIntervalsSet.add(cabinets[j][i].DayStudyEvents[h].TimeIntervalString);
      }

      const events: Event[] = [];
      for (let m = 0; m < cabinets[j][i].DayStudyEvents.length; m++) {
        events.push({
          main: [cabinets[j][i].DayStudyEvents[m].Subject],
          extra: [cabinets[j][i].DayStudyEvents[m].EducatorsDisplayText],
          address:
            cabinets[j][i].DayStudyEvents[m].LocationsDisplayText === undefined
              ? [""]
              : [cabinets[j][i].DayStudyEvents[m].LocationsDisplayText],
          interval: cabinets[j][i].DayStudyEvents[m].TimeIntervalString,
        });
      }
      weekdays[i].push(events);
    }

    const timeIntervals: string[] = Array.from(timeIntervalsSet).sort((a: string, b: string) => sortIntervals(a, b));

    for (let h = 0; h < weekdays[i].length; h++) {
      let didReachInterval = false;

      for (let v = 0; v < timeIntervals.length; v++) {
        if (weekdays[i][h][v]) {
          if (timeIntervals[v] === weekdays[i][h][v].interval) {
            didReachInterval = true;

            switch (type) {
              case "group":
                const m = v + 1;
                while (weekdays[i][h].length > timeIntervals.length) {
                  if (timeIntervals[v] === weekdays[i][h][m].interval) {
                    weekdays[i][h][v].main.push(weekdays[i][h][m].main[0]);
                    weekdays[i][h][v].extra.push(weekdays[i][h][m].extra[0]);
                    weekdays[i][h][v].address.push(weekdays[i][h][m].address[0]);
                    weekdays[i][h].splice(m, 1);
                  } else {
                    break;
                  }
                }
                break;
              case "cabinet":
                for (let m = v + 1; m < weekdays[i][h].length; m++) {
                  if (timeIntervals[v] === weekdays[i][h][m].interval) {
                    weekdays[i][h][v].main.push(weekdays[i][h][m].main[0]);
                    weekdays[i][h][v].extra.push(weekdays[i][h][m].extra[0]);
                    weekdays[i][h][v].address.push(weekdays[i][h][m].address[0]);
                    weekdays[i][h].splice(m, 1);
                  } else break;
                }
                break;
            }
          } else {
            if (didReachInterval) {
              weekdays[i][h].splice(v, 0, filler);
            } else {
              if (weekdays[i][h].length < timeIntervals.length) {
                if (v === 0) {
                  weekdays[i][h] = [filler, ...weekdays[i][h]];
                } else weekdays[i][h].splice(v - 1, 0, filler);
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

  return weekdays;
}

export default sortTimetableDays;
