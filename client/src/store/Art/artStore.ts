import create from 'zustand';

type State = {
    data: [],
    artId : number
}

type Action = {
    setData: Function,
    setArtId : Function,
}

export const useArtStore = create<State & Action>((set)=>({
    data:[],
    artId : 0,
    setData: ( newData : [] ) => set({ data : newData }),
    setArtId: ( newArtId : number ) => set({ artId : newArtId }),
}));