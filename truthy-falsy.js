// Exemplo de valores "truthy"

console.log("***************** - truthy - *****************");

const trueValue = true;
const anyNumberGreaterThanZero = 42;
const nonEmptyString = "Hello, world!";
const anyObject = { key: "value" };
const anyFunction = () => {};

if (trueValue) {
  console.log("trueValue é truthy");
}

if (anyNumberGreaterThanZero) {
  console.log("anyNumberGreaterThanZero é truthy");
}

if (nonEmptyString) {
  console.log("nonEmptyString é truthy");
}

if (anyObject) {
  console.log("anyObject é truthy");
}

if (anyFunction) {
  console.log("anyFunction é truthy");
}

// Exemplo de valores "falsy"
console.log("***************** - falsy - *****************");

const falseValue = false;
const zero = 0;
const emptyString = "";
const nullValue = null;
const undefinedValue = undefined;

if (!falseValue) {
  console.log("falseValue é falsy");
}

if (!zero) {
  console.log("zero é falsy");
}

if (!emptyString) {
  console.log("emptyString é falsy");
}

if (!nullValue) {
  console.log("nullValue é falsy");
}

if (!undefinedValue) {
  console.log("undefinedValue é falsy");
}

// undefined
console.log("***************** - undefined - *****************");

let variableUndefined;
console.log(variableUndefined); 

const obj = {};
console.log(obj.nonExistentProperty); 

// null
console.log("***************** - null - *****************");

const _nullValue = null;
console.log(_nullValue);

//typeof
console.log("***************** - typeof - *****************");

console.log(typeof nonEmptyString);
console.log(typeof zero);

console.log(typeof variableUndefined);
console.log(typeof obj.nonExistentProperty); 
console.log(typeof nullValue);

