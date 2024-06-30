import { useEffect, useState } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import Footer from "./Footer"

//d0c17f0

const API_URL = 'http://www.omdbapi.com?apikey=d0c17f0';



const App = () =>{

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() =>{
        searchMovies('Batman');
    }, []);
    
    return(
        <div className="app">
            <h1>Movie App</h1>

            <div className="search">
                <input
                    placeholder="Search" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) =>(
                            <MovieCard movie={movie} />
                        ))}
                     </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies found</h2>
                    </div>
                )
            }

            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;