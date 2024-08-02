import { create } from "zustand";

export enum PageTypes {
  HOME = "HOME",
  RANDOM_WALKER = "RANDOM_WALKER",
}
export type PageStore = {
  page: number;
  // prevPage: string;
  updatePage: (newPage: PageTypes) => void;
};

const usePageStore = create((set) => ({
  page: PageTypes.HOME,
  // prevPage: "",
  updatePage: (newPage: PageTypes) =>
    set({
      page: newPage,
    }),
}));

export default usePageStore;
