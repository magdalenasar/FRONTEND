// TODO:1- Write a JavaScript function to check whether a string is blank or not.
function is_Blank(str) {
  return str.length === 0;
}

console.log(is_Blank(""));
console.log(is_Blank("abc"));

// TODO:2- Write a JavaScript function to hide email addresses to protect from unauthorized user.
function protect_email(email) {
  //FIXME: return email.substring(0, 5) + "..." + email.substring(11);

  const positieVanDeAt = email.indexOf("@");
  console.log(positieVanDeAt);

  const email_begin = email.substring(0, 5) + "...";
  const email_end = email.substring(positieVanDeAt);
  return email_begin + email_end;
}

console.log(protect_email("robin_singh@example.com")); // "robin...@example.com"

// TODO:3- Write a JavaScript function to insert a string within a string at a particular position (default is 1).

function insert(str, ins_str, index) {
  if (typeof index == "undefined") {
    index = 0;
  }

  if (typeof ins_str == "undefined") {
    // or: (ins_str === 'undefined')
    ins_str = "";
  }

  return str.substring(0, index) + ins_str + str.substring(index, str.length);
}

console.log(insert("We are doing some exercises.")); // =>  "We are doing some exercises."
console.log(insert("We are doing some exercises.", "JavaScript ")); //  => "JavaScript We are doing some exercises."
console.log(insert("We are doing some exercises.", "JavaScript ", 18)); //=> "We are doing some JavaScript exercises."

// TODO:4- Write a JavaScript function to chop a string into chunks of a given length.
function string_chop(str, nr) {
  //return str.match(new RegExp(".{1," + length + "}", "g"));

  const stukskes = [];
  const aantaalKeerDoorlopen = Math.ceil(str.length / nr);
  for (let i = 0; i < aantaalKeerDoorlopen; i++) {
    stukskes.push(str.substr(nr * i, nr));
  }

  return stukskes;
}

console.log(string_chop("w3resource")); //=> ["w3resource"]
console.log(string_chop("w3resource", 2)); //=>  ["w3", "re", "so", "ur", "ce"]
console.log(string_chop("w3resource", 3)); //=> ["w3r", "eso", "urc", "e"]

//TODO:5- Write a JavaScript function to truncate a string to a certain length.
function truncate_string(str) {
  return str.substring(0, 4);
}
console.log(truncate_string("Robin Singh", 4)); //=>  "Robi"

// TODO:6- Write a JavaScript function to test whether the character at the provided (character) index is lower case.
function isLowerCaseAt(str, index) {
  if (str.startsWith("s", 1)) {
    return true;
  }
}

console.log(isLowerCaseAt("Js STRING EXERCISES", 1)); // => true

//TODO:7- Write a JavaScript function to test whether a string ends with a specified string.
function endsWith(str) {
  if (str.endsWith("exercises")) {
    return true;
  }
}

console.log(endsWith("JS string exercises", "exercises")); // => true

//TODO:8- Write a JavaScript function to get unique guid (an acronym for 'Globally Unique Identifier?) of the specified length, or 32 by default.
function guid(len) {
  let buf = [],
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    charlen = chars.length,
    length = len || 32;

  for (let i = 0; i < length; i++) {
    buf[i] = chars.charAt(Math.ceil(Math.random() * charlen));
  }

  return buf.join("");
}

console.log(guid()); //=> "hRYilcoV7ajokxsYFl1dba41AyE0rUQR"
console.log(guid(15)); //=> "b7pwBqrZwqaDrex"
