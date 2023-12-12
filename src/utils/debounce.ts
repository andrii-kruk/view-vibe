import { DebouncedFunction } from "src/types";

function debounce<T extends (...args: any[]) => void>(
  func: T,
  timeout = 500,
  context: any = null
): DebouncedFunction<T> {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): void => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, timeout);
  };
}

export default debounce;
