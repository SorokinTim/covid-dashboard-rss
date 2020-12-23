export default function splitNumberIntoSpaces(num) {
  return String(num).split('').reverse().join('')
    .match(/.{1,3}/g)
    .map((el) => String(el).split('').reverse().join(''))
    .reverse()
    .join(' ');
}
