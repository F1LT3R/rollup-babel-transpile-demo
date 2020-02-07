const foo = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('FOO!');
    }, 300);
  });

export default foo;

export const bar = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('BAR!');
    }, 300);
  });

export const baz = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('BAZ!');
    }, 300);
  });
