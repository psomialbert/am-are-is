# am-are-is
A simple node.js library which uses `inflected` to see if it should return `am`, `are` or `is`.

## Installation
```
yarn add am-are-is
```
or
```
npm install --save am-are-is
```

## Usage

```javascript
const amareis = require('am-are-is');

console.log(`I ${amareis('I')}`); // I am
console.log(`You ${amareis('yoU')}`); // You are
console.log(`They ${amareis('They')}`); // They are
console.log(`We ${amareis('we')}`); // We are
console.log(`It ${amareis('it')}`); // It is
console.log(`A ball ${amareis('ball')}`); // A ball is
console.log(`Balls ${amareis('balls')}`); // Balls are
```
