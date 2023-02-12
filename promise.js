let p = new Promise(function (resolve, err) {
  let A = 100;
  let B = 20;
  let C = A + B;
  if (A >= 100) {
    resolve();
  } else {
    err();
  }
});

function allgood() {
  console.log("good");
}

function allbad() {
  console.log("bad");
}

p.then(allgood, allbad);
