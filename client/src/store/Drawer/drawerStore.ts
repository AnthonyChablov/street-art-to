import create from 'zustand';

type State={
    toggleSideDrawer : boolean
}

type Action={
    setToggleSideDrawer : Function
}

export const useDrawerStore = create<State & Action>((set)=>({
    toggleSideDrawer: false,
    setToggleSideDrawer: ( newToggleSideDrawer : boolean ) => set({ toggleSideDrawer : newToggleSideDrawer })
}))