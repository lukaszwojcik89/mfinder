import './App.css';
import { useState } from 'react';

function App() {
    const [value, setValue] = useState('');
    const [movies, setMovies] = useState([]);

    async function getMovieData(query) {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab99dc29cd462eba2f2e028c132ea64c&language=pl-PL&query=${query}&page=1&include_adult=true`)

        if (response.status !== 200) {
            throw new Error('Error: ' + 'Something is no yes');
        }
        const data = await response.json();
        return data.results;
    }

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        getMovieData(value).then((data) => {
            setMovies(data);
        })
    }

    return (
        <div className="App">
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="search">
                    Search:
                </label>
                <input type="text" id="search" value={value} onChange={handleChange} />
                <button type="submit">Find</button>
            </form>
=
            {movies.map((movie) => (
                <div key={movie.id} style={{ 'border': '1px solid lightcoral', 'borderRadius': '15px', 'padding': '10px', 'margin': '10px' }}>
                    <h2>{movie.title}</h2>
                    {movie.poster_path ? (
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style={{ 'width': '100%' }} alt={`Poster of ${movie.title}`} />
                    ) : (
                        <h4>Something is no yes</h4>
                    )}
                </div>
            ))}
        </div>
    );
}


export default App;
