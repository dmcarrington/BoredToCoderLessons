try {
  const badstr = `{"name":"Satoshi,"age":21}`;
  const obj = JSON.parse(badstr);
  console.log(obj);
} catch (err) {
  console.log("caught error:", err);
}
