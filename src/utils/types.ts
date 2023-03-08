export type typeForComp = "display" | "operators" | "numbers" | "equal";

export interface IRuntimeComp {
  id: number;
  type: typeForComp;
}
