const is_ok = true;

let itemRendering = (task, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (is_ok) {
        resolve(task);
      } else {
        reject('error Garrafal');
      }
    }, time);
  });
};

export default itemRendering;
