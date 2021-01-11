export default function splitNumberWithCommas(num) {
  const [integer, decimal] = String(num).split('.');
  let resultString = String(integer).split('').reverse().join('')
    .match(/.{1,3}/g)
    .map((el) => String(el).split('').reverse().join(''))
    .reverse()
    .join(',');

  if (decimal) {
    resultString += `.${decimal}`;
  }

  return resultString;
}
