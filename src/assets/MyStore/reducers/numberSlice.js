import { createAction, createAsyncThunk, createReducer, createSelector } from "@reduxjs/toolkit"
import store from "../store"

const initialState={
    number: 0,
    users:[]
}

//Actions
//Action should be export to dipatch
export const increment = createAction('number-increment')
export const decrement = createAction('number-decrement', (name, value, city)=>{
    return {
        payload:{
            name,
            value,
            city
        }
    }
})

export const getUsers = createAsyncThunk('number-getUsers', async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    if(Array.isArray(data)){
        return data
        }else{
            return{err:'some error'}
        }
})
//Reducers
const numberReducer = createReducer(initialState, (builder)=>{
    builder.addCase(increment,(state, action) => {
        state.number += action.payload.value //Different way of accept value from user
    })

    builder.addCase(decrement, (state, action)=>{
        state.number -= action.payload.value //Different way of accept value from user -> this is the correct way
    })

    builder.addCase(getUsers.fulfilled, (state, action)=>{
        state.users = action.payload
    })
})

//using create selector it's help to prevent unnecessary components re-renders
const numberSele = (store)=> store.number.number
export const numberSelector = createSelector([numberSele], (number)=>{
    console.log("number Running")
    return number
})
//using create selector it's help to prevent unnecessary components re-renders

export default numberReducer