import Header from "./components/Header";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <PostList />
      </main>
    </div>
  );
}

export default App;
