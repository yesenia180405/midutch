import { defineStore } from "pinia";
export const useFormat = defineStore("format", () => {
  const format = (n: number): string | number =>
    n >= 1000 ? (n / 1000).toFixed(1) + "K" : n;
  return { format };
});
