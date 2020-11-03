// 取得日期物件中，當地時間的日期
export default function (time) {
  const date = new Date(time * 1000);
  return date.toLocaleDateString();
}
