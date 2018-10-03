var base = [1, 2, 3, 4, 5];
let rev = [];
const Reverse = (base) => {
  let rev = [];
var base = [1, 2, 3, 4, 5];
  for (let i = 0; i < base.length; i++){
    const Last = (base) => {
      return base[base.length - 1];
    }
    let lastEle = Last(base);
    rev[rev.length] = lastEle;
  }
  return rev;
}

Reverse(base);
console.log(rev);