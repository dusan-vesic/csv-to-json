const _ = require("lodash");

var users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true },
];

users = _.find(users, function (o) {
  return o.age < 40;
});

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ users: users }),
  };
};
