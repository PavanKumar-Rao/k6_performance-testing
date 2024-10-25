import http from "k6/http";
import { sleep } from "k6";

export const options = {
  stages: [
    {
      duration: "1m",
      target: 10,
    },
    {
      duration: "5s",
      target: 0,
    },
  ],
};

export default function () {
  http.get("https://test.k6.io/");
  sleep(1);
}
