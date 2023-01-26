import Article from "./component/Article";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Nav from "./component/Nav";



function App() {
  return (
    <div className="App">
    <Header/>
    <Nav/>
    <Article></Article>
    <Footer/>
    </div>
  );
}

export default App;
