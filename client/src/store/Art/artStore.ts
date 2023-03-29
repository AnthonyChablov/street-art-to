import create from 'zustand';

type State = {
    data: [],
    artId : string,
    displaySingleArt: boolean, 

    /* Search Query State */
    artSearchQuery : string,
    programSearchQuery: string,
    wardSearchQuery: string,

    /* Map Marker State */
    mapCenter : Array<number> 
}

type Action = {
    setData: Function,
    setArtId : Function
    setDisplaySingleArt: Function,

    /* Search Query State */
    setArtSearchQuery: Function,
    setProgramSearchQuery: Function,
    setWardSearchQuery: Function,

    /* Map Marker State */
    setMapCenter: Function
}

export const useArtStore = create<State & Action>((set)=>({
    data:[],
    artId : '0loTunpZy2jRt3u5cnqk',
    displaySingleArt : false,
    artSearchQuery : '',
    programSearchQuery:'',
    wardSearchQuery:'',
    mapCenter : [43.651070, -79.347015],
    setData: ( newData : [] ) => set({ data : newData }),
    setArtId: ( newArtId :  string ) => set({ artId : newArtId }),
    setDisplaySingleArt: ( newDisplaySingleArt : boolean ) => set({ displaySingleArt : newDisplaySingleArt }) ,
    setArtSearchQuery : ( newArtSearchQuery : string ) => set({ artSearchQuery : newArtSearchQuery }) , 
    setProgramSearchQuery: ( newProgramSearchQuery : string ) => set({ programSearchQuery : newProgramSearchQuery }) ,
    setWardSearchQuery : ( newWardSearchQuery : string ) => set({ wardSearchQuery : newWardSearchQuery }) ,
    setMapCenter : ( newMapCenter : Array<number> ) => set({ mapCenter : newMapCenter }) ,
}));