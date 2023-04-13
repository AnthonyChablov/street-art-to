import create from 'zustand';

type State = {
    likeData : []
}

type Action = {
    setLikeData : Function
}

export const useLikeStore = create<State & Action>((set)=>({
    likeData:[],
    setLikeData: ( newLikeData : [] ) => set({ likeData : newLikeData }),
}));