// https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
  if (walk.length != 10) return false;
  let vertical = (horizontal = 0);
  walk.forEach((direction) => {
    if (direction == "n") vertical++;
    else if (direction == "s") vertical--;
    else if (direction == "e") horizontal++;
    else if (direction == "w") horizontal--;
  });
  return vertical == 0 && horizontal == 0;
}
