import create from 'zustand';

type State={
    toggleSideBar: boolean,
    toggleSideDrawer : boolean
    toggleArtDrawer: boolean
}

type Action={
    setToggleSideBar: Function,
    setToggleSideDrawer : Function,
    setToggleArtDrawer: Function,
}

export const useDrawerStore = create<State & Action>((set)=>({
    toggleSideBar: true,
    toggleSideDrawer: false,
    toggleArtDrawer: false,
    setToggleSideBar: ( newToggleSideBar : boolean ) => set({ toggleSideBar : newToggleSideBar }),
    setToggleSideDrawer: ( newToggleSideDrawer : boolean ) => set({ toggleSideDrawer : newToggleSideDrawer }),
    setToggleArtDrawer:( newToggleArtDrawer : boolean ) => set({ toggleArtDrawer : newToggleArtDrawer }),
}))