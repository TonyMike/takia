import { create } from 'zustand';
import getState from "../lib/state.json";

interface Stateprops {
  selected: string;
  updateSelectedState: (selectedState: string) => any;
  allStates: string[];
  schools: string[],
  updateSchools: () => void
}
const keys = getState.flatMap(key => Object.keys(key));
const values = getState.flatMap(value => Object.values(value))
const state = keys.map((key, index) => {
  const schools = Object.values(values[index])
  return {
    state: key,
    schools
  }
})


export const useStateStore = create<Stateprops>((set) => ({
  selected: '',
  updateSelectedState: (selected) => {
    set({ selected })
  },
  schools: [],
  allStates: keys,
  updateSchools: () => {
    const selected = useStateStore.getState().selected
    const l = state.filter(s => s.state.toLowerCase() === selected);
    set({ schools: l[0]?.schools })
  }
}))



