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

export default sortIntervals;
