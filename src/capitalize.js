export const capitalize = (text) => {
  const [firstSymbol = '', ...restSymbols] = text;
  return `${firstSymbol.toUpperCase()}${restSymbols.join('')}`;
};

// console.log(capitalize('hello'));
// console.log(capitalize('how are you'));
