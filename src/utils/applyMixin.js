
export default function applyMixins(targetCtor, funs) {
  for(let i = 0; i < funs.length; i++) {
    Object.keys(funs[i]).forEach((key) => {
      targetCtor.prototype[key] = funs[i][key];
    });
  }
}