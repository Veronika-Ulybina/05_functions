'use strict';

const getUppercase = (str) => {
  const firstLetter = str[0].toUpperCase();

  const othersLetter = str.slice(1).toLowerCase();

  return firstLetter + othersLetter;
}

const res = getUppercase('приВет Мир');
console.log(res);
