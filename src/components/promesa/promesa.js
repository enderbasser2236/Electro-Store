const is_ok = true;

let itemRendering = (task) => {
  return new Promise((resolve, reject) => {
    if (is_ok) {
      setTimeout(() => {
        resolve(task);
      }, 3000);
    } else {
      reject('error');
    }
  });
};

export default itemRendering;
