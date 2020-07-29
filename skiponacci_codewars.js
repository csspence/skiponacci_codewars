/*
Your task is to generate the Fibonacci sequence to n places, with each alternating value as "skip". For example:

"1 skip 2 skip 5 skip 13 skip 34"

Return the result as a string

You can presume that n is always a positive integer between (and including) 1 and 64.
*/

const skiponacci = (n) => {
  let str = '';
  let toggle = false;
  let fibonacci = [0, 1, 1];
  for(let i = 3; i < 65; i++) {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
  }
  for(let i = 1; i < n + 1; i++) {
    if(i === 1 && n === 1) {
      return '1';
    }
    if(i === 1){
      str += i;
      continue
    }
    if(toggle === true) {
      str += ' skip ' + fibonacci[i];
    }
    toggle = !toggle;
  }

  return str;
}