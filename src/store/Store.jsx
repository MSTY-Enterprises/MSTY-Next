import { create } from "zustand";
import { Allservicesdata } from "./Allservicesdata";

export const useStore = create((set) => ({
  servicesdata: Allservicesdata,  
}));
