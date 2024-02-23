function normalFunction() {
  console.log("Hello");
  console.log("World");
}

normalFunction();

function* generatorFunction() {
  yield "Hello";
  yield "World";
}

const generatorObject = generatorFunction();

for (const item of generatorObject) {
  console.log(item)
}
