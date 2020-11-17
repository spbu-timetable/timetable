export default function transpose(a: any) {
  return a[0].map(function (_: any, c: any) {
    return a.map(function (r: any) {
      return r[c];
    });
  });
}
