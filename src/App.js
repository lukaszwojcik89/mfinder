import './App.css';
import { useState } from 'react';

function App() {
    const [value, setValue] = useState('');

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
        </div>
    );
}

export default App;
