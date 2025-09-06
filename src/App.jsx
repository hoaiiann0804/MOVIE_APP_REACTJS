import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Detail from "./components/Detail";
import "./App.css";

function App() {
    const [state, setState] = useState({
        s: "sherlock",    
        results: [],
        selected: {},
    });
    
    const searchInput = (e) => {
        let s = e.target.value;

        setState((prevState) => {
            return { ...prevState, s: s };
        });
    };

    const search = (e) => {
        if (e.key === "Enter") {
            const searchUrl =`https://api.themoviedb.org/3/search/movie?api_key=e3d460cad173ccfed6ffc7cad4197f72&language=vi-VN&query=${state.s}&page=1&include_adult=false`
            axios(searchUrl ).then(
                ({ data }) => {
                    let results = data.results;

                    console.log(results);

                    setState((prevState) => {
                        return {
                            ...prevState,
                            results: results,
                        };
                    });
                }
            );
        }
    };

    const openDetail = (id) => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=e3d460cad173ccfed6ffc7cad4197f72&language=vi-VN`).then(({ data }) => {
            setState(prevState => ({ ...prevState, selected: data }));
        });
    };

    const closeDetail = () => {
        setState((prevState) => {
            return { ...prevState, selected: {} };
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>TẤT CẢ DANH SÁCH PHIM</h1>
            </header>
            <main>
                <Search
                    searchInput={searchInput}
                    search={search}
                />

                <div className="container">
                    { Array.isArray(state.results) && state.results.map((e) => (
                        <div
                            className="item"
                            onClick={() =>
                                openDetail(e.id)
                            }
                        >
                            <img
                                style={{ width: "200px" }}
                                src={"https://image.tmdb.org/t/p/w200" + e.poster_path}
                            />
                            <h3 style={{ color: "white" }}>
                                {e.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {typeof state.selected.Title !=
                "undefined" ? (
                    <Detail
                        selected={state.selected}
                        closeDetail={closeDetail}
                    />
                ) : (
                    false
                )}
            </main>
        </div>
    );
}

export default App;
