function checkDays(groupEventsDays: any[]): any[] {
  const weekDays = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
  const checkedGroupEventsDays: any[] = [];

  for (let i = 0; i < groupEventsDays.length; i++) {
    const GroupEventDays: any[] = [];
    let k = 6;
    for (let j = 0, y = 0; j < k; y++) {
      console.log(groupEventsDays[i]);
      if (groupEventsDays[i][j] && groupEventsDays[i][j].DayString.includes(weekDays[y])) {
        GroupEventDays.push(groupEventsDays[i][j]);
        j++;
      } else {
        const emptyDay = {
          Day: "",
          DayString: weekDays[j],
          DayStudyEvents: [],
        };
        GroupEventDays.push(emptyDay);
        k--;
      }
      console.log(GroupEventDays);
    }
    checkedGroupEventsDays.push(GroupEventDays);
    console.log(checkedGroupEventsDays);
  }

  return checkedGroupEventsDays;
}

export default checkDays;
