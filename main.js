const lib = function(str) {
  str = str.trim();

  if (!str) {
    return;
  }

  let result = 0;

  const strArray = str.split(/(\d+)/);

  strArray.forEach(element => {
    const number = parseInt(element);
    if (Number.isInteger(number) && number % 2 !== 0) {
      result = result + Math.pow(number, 2);
      console.log('add: ', number);
    }
  });

  return result;
}

const result = lib("ab2v9bc13j5jf4jv21");

console.log(result);