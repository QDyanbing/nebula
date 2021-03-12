/**
 * 一个数组删除另外一个数组
 * @param sourceArray
 * @param deleteArray
 * @param key
 */

interface ItemInterface {
  [key: string]: any;
}

function filterArray(sourceArray: string[], deleteArray: string[]): string[];
function filterArray<T extends ItemInterface>(
  sourceArray: T[],
  deleteArray: T[],
  key: string
): T[];
function filterArray<T extends ItemInterface>(
  sourceArray: T | string[],
  deleteArray: T | string[],
  key?: string
) {
  return sourceArray.filter((item: T) => {
    if (typeof item === "object" && key) {
      return deleteArray.every((del: T) => item[key] !== del[key]);
    } else if (typeof item === "object" && key) {
      return new Error(
        "array is made up of objects, which needs a key to judge!"
      );
    } else {
      return !deleteArray.includes(item);
    }
  });
}

export default filterArray;
