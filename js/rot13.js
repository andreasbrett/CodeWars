// https://www.codewars.com/kata/530e15517bc88ac656000716

function rot13(message) {
  return message
    .replace(/[a-z]/g, (char) =>
      String.fromCharCode(((char.charCodeAt(0) - 97 + 13) % 26) + 97)
    )
    .replace(/[A-Z]/g, (char) =>
      String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65)
    );
}
