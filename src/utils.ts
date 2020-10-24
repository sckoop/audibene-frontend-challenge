import numeral from "numeral";

export const formatUps = (ups: number): string => {
  if (ups < 1000) {
    return `${ups}`;
  }

  return numeral(ups).format("0.0a").replace(".0", "");
};
