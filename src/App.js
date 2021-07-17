import Header from "./components/Header";
import Vidcontainer from "./components/Vidcontainer";
import {useState} from 'react';

function App() {
  const [list, setList] = useState([])
  const onSearch = async (search) =>{
    const getList = await fetch(`http://localhost:8000/api/${search.search}`)
    const res = await getList.json()
    // console.log(res)
    setList(res.videos)
    //console.log('list', list)

  }

  return (
    <div className='container'>
      <Header onSearch = {onSearch}/>
      <div className='vidcontainer'>
      <Vidcontainer  vidList={list}/>
      </div>
    </div>
  );
}

export default App;
