
import Search from './components/search/Search';
import Currentweather from './components/currentweather/Currentweather'

function App() {
  const handleOnSearchChange=(searchData)=>
  {
console.log('')
  }
  return (
    <div className="max-w-screen-lg my-4 mx-auto">
     <Search onSearchChange={handleOnSearchChange}/>
     <Currentweather />
    </div>
  );
}

export default App;
