import create from 'zustand';

type State = {
    data: [],
    artId : number,
    displaySingleArt: boolean, 
}

type Action = {
    setData: Function,
    setArtId : Function
    setDisplaySingleArt: Function,
}

export const useArtStore = create<State & Action>((set)=>({
    data:[],
    artId : 0,
    displaySingleArt : false,
    setData: ( newData : [] ) => set({ data : newData }),
    setArtId: ( newArtId : number ) => set({ artId : newArtId }),
    setDisplaySingleArt: ( newDisplaySingleArt : boolean ) => set({ displaySingleArt : newDisplaySingleArt }),
}));