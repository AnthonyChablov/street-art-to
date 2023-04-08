import create from 'zustand';

type State={
    toggleSideBar: boolean,
    toggleSideDrawer : boolean,
    toggleArtDrawer: boolean,
    toggleSwipeDrawer: boolean
    toggleModal: boolean,
    toggleToast: boolean
}

type Action={
    setToggleSideBar: Function,
    setToggleSideDrawer : Function,
    setToggleArtDrawer: Function,
    setToggleSwipeDrawer: Function,
    setToggleModal: Function,
    setToggleToast: Function,
}

export const useDrawerStore = create<State & Action>((set)=>({
    toggleSideBar: true,
    toggleSideDrawer: false,
    toggleArtDrawer: false,
    toggleSwipeDrawer:true,
    toggleModal: false,
    toggleToast: false,
    setToggleSideBar: ( newToggleSideBar : boolean ) => set({ toggleSideBar : newToggleSideBar }),
    setToggleSideDrawer: ( newToggleSideDrawer : boolean ) => set({ toggleSideDrawer : newToggleSideDrawer }),
    setToggleArtDrawer:( newToggleArtDrawer : boolean ) => set({ toggleArtDrawer : newToggleArtDrawer }),
    setToggleSwipeDrawer:( newToggleSwipeDrawer : boolean ) => set({ toggleSwipeDrawer : newToggleSwipeDrawer }),
    setToggleModal: ( newToggleModal : boolean ) => set({ toggleModal : newToggleModal }),
    setToggleToast:(newToggleToast : boolean) =>set ({toggleToast: newToggleToast}),
}))