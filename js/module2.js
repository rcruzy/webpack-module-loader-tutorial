var _ = require('lodash');

var people = [{
  "id": 1,
  "first_name": "Matthew",
  "last_name": "Gutierrez",
  "email": "mgutierrez0@mysql.com",
  "gender": "Male",
  "ip_address": "96.127.97.182"
}, {
  "id": 2,
  "first_name": "Richard",
  "last_name": "Day",
  "email": "rday1@yahoo.com",
  "gender": "Male",
  "ip_address": "185.4.174.148"
}, {
  "id": 3,
  "first_name": "Timothy",
  "last_name": "Diaz",
  "email": "tdiaz2@newsvine.com",
  "gender": "Male",
  "ip_address": "229.226.22.152"
}, {
  "id": 4,
  "first_name": "Annie",
  "last_name": "Duncan",
  "email": "aduncan3@yahoo.co.jp",
  "gender": "Female",
  "ip_address": "146.187.24.10"
}, {
  "id": 5,
  "first_name": "Nicholas",
  "last_name": "Wilson",
  "email": "nwilson4@photobucket.com",
  "gender": "Male",
  "ip_address": "45.227.189.44"
}, {
  "id": 6,
  "first_name": "Rachel",
  "last_name": "Stewart",
  "email": "rstewart5@examiner.com",
  "gender": "Female",
  "ip_address": "135.121.36.49"
}, {
  "id": 7,
  "first_name": "Cheryl",
  "last_name": "Barnes",
  "email": "cbarnes6@bbb.org",
  "gender": "Female",
  "ip_address": "208.53.237.79"
}, {
  "id": 8,
  "first_name": "Carl",
  "last_name": "Hunt",
  "email": "chunt7@a8.net",
  "gender": "Male",
  "ip_address": "6.245.14.12"
}, {
  "id": 9,
  "first_name": "Daniel",
  "last_name": "Moore",
  "email": "dmoore8@dion.ne.jp",
  "gender": "Male",
  "ip_address": "158.123.186.132"
}, {
  "id": 10,
  "first_name": "Brenda",
  "last_name": "Sims",
  "email": "bsims9@list-manage.com",
  "gender": "Female",
  "ip_address": "59.193.165.30"
}, {
  "id": 11,
  "first_name": "Sara",
  "last_name": "Berry",
  "email": "sberrya@cmu.edu",
  "gender": "Female",
  "ip_address": "28.169.153.212"
}, {
  "id": 12,
  "first_name": "Carlos",
  "last_name": "Boyd",
  "email": "cboydb@sogou.com",
  "gender": "Male",
  "ip_address": "20.148.79.194"
}, {
  "id": 13,
  "first_name": "Joseph",
  "last_name": "Jacobs",
  "email": "jjacobsc@earthlink.net",
  "gender": "Male",
  "ip_address": "187.111.138.102"
}, {
  "id": 14,
  "first_name": "Randy",
  "last_name": "Ruiz",
  "email": "rruizd@nba.com",
  "gender": "Male",
  "ip_address": "81.251.18.141"
}, {
  "id": 15,
  "first_name": "Mary",
  "last_name": "Morgan",
  "email": "mmorgane@wikispaces.com",
  "gender": "Female",
  "ip_address": "162.18.58.4"
}, {
  "id": 16,
  "first_name": "Diane",
  "last_name": "Smith",
  "email": "dsmithf@goo.ne.jp",
  "gender": "Female",
  "ip_address": "68.120.185.78"
}, {
  "id": 17,
  "first_name": "Wayne",
  "last_name": "Hawkins",
  "email": "whawkinsg@mozilla.org",
  "gender": "Male",
  "ip_address": "132.110.208.101"
}, {
  "id": 18,
  "first_name": "Willie",
  "last_name": "Brown",
  "email": "wbrownh@vistaprint.com",
  "gender": "Male",
  "ip_address": "30.133.50.141"
}, {
  "id": 19,
  "first_name": "Pamela",
  "last_name": "Boyd",
  "email": "pboydi@creativecommons.org",
  "gender": "Female",
  "ip_address": "36.52.23.253"
}, {
  "id": 20,
  "first_name": "Denise",
  "last_name": "Kennedy",
  "email": "dkennedyj@goo.ne.jp",
  "gender": "Female",
  "ip_address": "101.71.72.88"
}];

var femaleCount = _.filter(people, {gender: "Female"}).length;

alert(femaleCount + " females");
console.log('module2 stuff');
