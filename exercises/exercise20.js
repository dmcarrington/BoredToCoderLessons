function maximum(...args) {
  let max = args[0];
  for (i = 1; i < args.length; i++) {
    if (args[i] > max) {
      max = args[i];
    }
  }
  return max;
}

console.log(maximum(1, 3, 66, 32, 45));
console.log(maximum(-11, 3, -66, 32, 45, 101, -53));
