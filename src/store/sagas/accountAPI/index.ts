import Axios from "axios";

const accountAPI = Axios.create({
  baseURL: "https://spbu-timetable-api.herokuapp.com",
  responseType: "json",
});

export default accountAPI;
