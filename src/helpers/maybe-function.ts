export type MaybeFunction<T> = T | (() => T);

function valueOf<T>(value: MaybeFunction<T>): T {
  return typeof value === 'function' ? (value as () => T)() : value;
}

export default valueOf;
