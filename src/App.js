import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title = "TextUtils"  Home = "home"/>
      <div className="container">
      <TextForm heading= "Enter Text to analyze below"/>
      </div>
    </>
  );
}

export default App;
