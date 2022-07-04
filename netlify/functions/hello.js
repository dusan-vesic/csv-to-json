// const _ = require("lodash");
// const fetch = require("node-fetch");
import fetch from "node-fetch";
import { v4 as uuidv4 } from "uuid";
// var users = [
//   { user: "barney", age: 36, active: true },
//   { user: "fred", age: 40, active: false },
//   { user: "pebbles", age: 1, active: true },
// ];

// users = _.find(users, function (o) {
//   return o.age < 40;
// });

const url = "https://jsonplaceholder.typicode.com/todos/1";

exports.handler = async function (event, context) {
  let res = await fetch(url);
  let data = await res.json();
  return {
    statusCode: 200,
    body: JSON.stringify({ ...data, id: uuidv4() }),
  };
  // return fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     return {
  //       statusCode: 200,
  //       body: JSON.stringify(data),
  //     };
  //   });
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve({
  //       statusCode: 200,
  //       body: JSON.stringify({
  //         users: [{ name: "bob", id: uuidv4() }],
  //       }),
  //     });
  //   }, 1000);
  // });
  // return {
  //   statusCode: 200,
  //   // body: JSON.stringify({ users: [{ name: "alice" }] }),
  //   body: JSON.stringify({ users: [{ name: "alice", id: uuidv4() }] }),
  // };
};

// exports.handler = async function (event, context) {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ users: users }),
//   };
// };

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
