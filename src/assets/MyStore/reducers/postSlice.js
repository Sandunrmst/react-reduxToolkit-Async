import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import store from "../store";

const initialState = {
    data:[],
    loading:'idle',
    error:null
}

export const getPost = createAsyncThunk('getPost', async ()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()

        console.log(data)
        if(Array.isArray(data)){
            return data
        }else{
            return{err:'some error'} //action.payload.err
        }
})

const postSlice = createSlice({
   name:'post-slice',
   initialState,
   reducers:{},
   extraReducers:(builder)=>{
    builder.addCase(getPost.pending, (state, action)=>{
        state.loading = 'pending'
    })

    builder.addCase(getPost.fulfilled, (state, action)=> {
        if(action.payload.err){
            state.loading = 'failed'
            state.error = action.payload.err
        }else{
            state.loading = 'completed'
            state.data = action.payload
        }

    })

    builder.addCase(getPost.rejected,(state, action)=>{
        state.loading = 'rejected'
    })
   }
})
const selAllPost = (store)=>store.post
export const seleteAllPost = createSelector([selAllPost], (post)=>{
    console.log("post Running")
    return post
    
})

export default postSlice.reducer