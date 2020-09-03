export const colorValue = (
  value: number,
  { green, red }: { [key: string]: any } = {}
): string => {
  if (value < 0.5) {
    return red;
  }

  return green;
};

export const addOperator = (value: number): string => {
  if (value < 0.5) {
    return `-${value}%`;
  }

  return `+${value}%`;
};
