import './App.css';
import Navbar from "./componentes/Navbar";
import MovieList from "./componentes/MovieList"
import { UserProvider } from './context/UserContext';
import { MoviesProvaider } from './context/MoviesContext';




function App() {
  return (
    <div className="App">
      <UserProvider>
        <MoviesProvaider>
          <Navbar />
          <MovieList />
        </MoviesProvaider>
      </UserProvider>
    </div>
  );
}

export default App;
