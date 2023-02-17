const book = {
  title: "Cryptonomicon",
  author: "Neal Stephenson",
  pages: 2400,
};

for (property in book) {
  console.log(property, ":", book[property]);
}
