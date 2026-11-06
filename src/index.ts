export function truncateAtWord(value: string, maxLength: number): string {
  if (typeof value !== 'string' || !Number.isSafeInteger(maxLength) || maxLength < 0)
    throw new RangeError('Expected text and nonnegative integer length');
  if (value.length <= maxLength) return value;
  const prefix = value.slice(0, maxLength + 1),
    boundary = prefix.search(/\s+\S*$/u);
  return boundary < 0 ? value.slice(0, maxLength).trimEnd() : prefix.slice(0, boundary).trimEnd();
}
