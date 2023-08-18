
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import store from './assets/MyStore/store'
import { getPost } from './assets/MyStore/postSlice'


function App() {
  const postObj = useSelector((store)=>store.post)//select post reducer form store
  const dispatch = useDispatch()

  console.log(postObj)
  return (
    <>
      <button onClick={()=> dispatch(getPost())}>Get Data</button>
    </>
  )
}

export default App
