function palindrome(str) {
  str = str.split(" ").join("").toLowerCase();
  const check = str.replace(/[^a-zA-Z0-9 ]/g, '').split("").reverse().join("");
  if (check === str.replace(/[^a-zA-Z0-9 ]/g, '')) {
    return true;
  } else {
    return false;
  }
}
