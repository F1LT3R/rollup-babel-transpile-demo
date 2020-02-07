import foo, { bar, baz as qux } from './app/foo-bar-baz';
import quux, { corge } from './app/index';

(async () => {
  const a = await foo();
  const b = await bar();
  const c = await qux();
  const d = await quux();
  const e = await corge();

  console.log({ a, b, c, d, e });
})();
