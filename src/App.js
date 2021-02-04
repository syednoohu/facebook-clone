import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Widget from "./Components/Widget";
import './css/app.css';
// https://www.youtube.com/watch?v=mdO18zv3oGQ&t=679s - git hub hoisting

function App() {
  console.log(process.exp)
  return (
    <div className="app  ">
      <Header />  
      <div className="app__body flex app">
       
        <Sidebar/>
        <Feed/>
        <Widget/>
      </div>
    </div>
  );
}

export default App;
