
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import store from './assets/MyStore/store'
import { getPost, seleteAllPost } from './assets/MyStore/reducers/postSlice'
import { decrement, increment, numberSelector } from './assets/MyStore/reducers/numberSlice'


function App() {
  const postObj = useSelector(seleteAllPost)//select post reducer form store
  const number = useSelector(numberSelector)
  const dispatch = useDispatch()

  console.log(postObj)
  return (
    <>
      <h1>{number}</h1>
      <button onClick={()=> dispatch(getPost())}>Get Data</button>
      <button onClick={()=> dispatch(increment({name:'INC', value: 5, city:'Kuliyapitiya'}))}> Increment </button>
      <button onClick={()=> dispatch(decrement('DIC', 3, 'Kurunegala'))}>Decrement</button>
    </>
  )
}

export default App
