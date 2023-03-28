import create from 'zustand';

type State={
    toggleSideDrawer : boolean
    toggleArtDrawer: boolean
}

type Action={
    setToggleSideDrawer : Function,
    setToggleArtDrawer: Function,
}

export const useDrawerStore = create<State & Action>((set)=>({
    toggleSideDrawer: false,
    toggleArtDrawer: false,
    setToggleSideDrawer: ( newToggleSideDrawer : boolean ) => set({ toggleSideDrawer : newToggleSideDrawer }),
    setToggleArtDrawer:( newToggleArtDrawer : boolean ) => set({ toggleArtDrawer : newToggleArtDrawer }),
}))