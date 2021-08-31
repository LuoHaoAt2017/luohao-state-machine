
function LoadForm() {
  return new Promise(function(resolve) {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

export {
  LoadForm
}