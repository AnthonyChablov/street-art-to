import create from 'zustand';

type State = {
    data: [],
    artId : number,
    displaySingleArt: boolean, 

    /* Search Query State */
    artSearchQuery : string,
    programSearchQuery: string,
    wardSearchQuery: string,
}

type Action = {
    setData: Function,
    setArtId : Function
    setDisplaySingleArt: Function,

    /* Search Query State */
    setArtSearchQuery: Function,
    setProgramSearchQuery: Function,
    setWardSearchQuery: Function,
}

export const useArtStore = create<State & Action>((set)=>({
    data:[],
    artId : 0,
    displaySingleArt : false,
    artSearchQuery : '',
    programSearchQuery:'',
    wardSearchQuery:'',
    setData: ( newData : [] ) => set({ data : newData }),
    setArtId: ( newArtId : number ) => set({ artId : newArtId }),
    setDisplaySingleArt: ( newDisplaySingleArt : boolean ) => set({ displaySingleArt : newDisplaySingleArt }) ,
    setArtSearchQuery : ( newArtSearchQuery : string ) => set({ artSearchQuery : newArtSearchQuery }) , 
    setProgramSearchQuery: ( newProgramSearchQuery : string ) => set({ programSearchQuery : newProgramSearchQuery }) ,
    setWardSearchQuery : ( newWardSearchQuery : string ) => set({ wardSearchQuery : newWardSearchQuery }) ,
}));