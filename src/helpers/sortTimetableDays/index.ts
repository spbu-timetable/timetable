import Event from "../../types/Event";
import pushItemToEvent from "./pushItemToEvent";
import sortIntervals from "./sortIntervals";

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
          groups:
            cabinets[j][i].DayStudyEvents[m].ContingentUnitName === undefined
              ? [""]
              : [cabinets[j][i].DayStudyEvents[m].ContingentUnitName],
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
                    weekdays[i][h][v] = pushItemToEvent(weekdays[i][h][v], {
                      main: weekdays[i][h][m].main[0],
                      extra: weekdays[i][h][m].extra[0],
                      address: weekdays[i][h][m].address[0],
                    });
                    weekdays[i][h].splice(m, 1);
                  } else {
                    break;
                  }
                }
                break;
              case "cabinet":
                for (let m = v + 1; m < weekdays[i][h].length; m++) {
                  if (timeIntervals[v] === weekdays[i][h][m].interval) {
                    weekdays[i][h][v] = pushItemToEvent(weekdays[i][h][v], {
                      main: weekdays[i][h][m].main[0],
                      extra: weekdays[i][h][m].extra[0],
                      address: weekdays[i][h][m].address[0],
                    });
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
