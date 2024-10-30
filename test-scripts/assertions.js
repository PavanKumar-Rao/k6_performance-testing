import http from "k6/http";
import { check } from "k6";
export default function () {
  const res = http.get("http://test.k6.io");
  console.log(res.status);
  check(res, {
    "status is 200": (result) => result.status === 200,
  }),
  check(res, {
    "verify the body": (result) => result.body.includes("load testing") === true,
  });
}
