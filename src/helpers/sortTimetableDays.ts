function sortTimetableDays(days: any) {
  const timetableGrid: any[][] = [];

  for (let i = 0; i < days.length; i++) {
    for (let j = 0; j < days[i].length; j++) {
      timetableGrid.push([]);
      for (let k = 0; k < days[i][j].DayStudyEvents.length; k++) {
        if (days[i][j].DayStudyEventsCount > 0) {
          timetableGrid[j].push(days[i][j].DayStudyEvents[k]);
        } else {
          timetableGrid[j].push("");
        }
      }
      console.log(days[i][j].DayStudyEvents);
    }
    console.log("-------------------------------------------");
  }
  console.log(timetableGrid);
  return;
}

export default sortTimetableDays;
