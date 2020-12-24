import Axios from "axios";

const timetableAPI = Axios.create({
  baseURL: "https://timetable.spbu.ru/api/v1",
  responseType: "json",
});

export default timetableAPI;
