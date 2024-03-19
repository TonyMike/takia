import { create } from 'zustand';
import getState from "../lib/state.json";

interface Stateprops {
  selected: string;
  updateSelectedState: (selectedState: string) => any;
  allStates: string[];
  schools: string[],
  updateSchools: () => void
}
interface UserProps {
  user: any;
  // updateUser: () => void
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


export const useStateStore = create<Stateprops>((set, get) => ({
  selected: '',
  updateSelectedState: (selected) => {
    set({ selected: selected })
  },
  schools: [],
  allStates: keys,
  updateSchools: () => {
    const selected = get().selected
    const l = state.filter(s => s.state.toLowerCase() === selected);
    //@ts-ignore
    set({ schools: l[0]?.schools })
  }
}))



export const useAuthStore = create<UserProps>((set) => ({
  user: {},

}))

