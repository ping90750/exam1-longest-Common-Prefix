export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  // Sort the array
  strs.sort();

  // Take the first and last string in the sorted array
  let first = strs[0];
  let last = strs[strs.length - 1];

  // Initialize index to keep track of the common prefix length
  let i = 0;

  // Compare characters of the first and last string
  while (
    i < first.length &&
    i < last.length &&
    first.charAt(i) === last.charAt(i)
  ) {
    i++;
  }

  // The common prefix is the substring from the start to the last matched index
  return first.substring(0, i);
}
