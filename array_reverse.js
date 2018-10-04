const base = [1, 2, 3, 4];
let rev = [];

const reverse = () => {
  for(let i = 0; i <= base.length -1 ; i++){
    let lastEle = base[base.length - i -1];
    rev[rev.length] = lastEle;
    //console.log(base[base.length - i]);
    //console.log(rev);
    //console.log(lastEle);
  }
  return rev;
};

console.log(base);
console.log(rev);
reverse(base);