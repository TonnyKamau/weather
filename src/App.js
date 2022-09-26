
import Search from './components/search/Search';
import Currentweather from './components/currentweather/Currentweather'

function App() {
  const handleOnSearchChange=(searchData)=>
  {
console.log('')
  }
  return (
    <div className="my-5 mx-auto max-w-screen-lg">
     <Search onSearchChange={handleOnSearchChange}/>
     <Currentweather />
    </div>
  );
}

export default App;
