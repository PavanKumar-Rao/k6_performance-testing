import http from "k6/http";
import { sleep } from "k6";

export const options = {
  stages: [
    {
      duration: "10s", //ram-up time
      target: 10,
    },
    {
      duration: "5m", //steady time
      target: 10,
    },
    {
      duration: "10s", //ramp-down time
      target: 0,
    },
  ],
};

export default function () {
  http.get("https://test.k6.io/");
  sleep(1);
  http.get("https://test.k6.io/contacts.php");
  sleep(2);
  http.get("https://test.k6.io/news.php");
  sleep(2);
}
