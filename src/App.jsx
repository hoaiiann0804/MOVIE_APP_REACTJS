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
        videoKey: null,
    });

    const searchInput = (e) => {
        let s = e.target.value;

        setState((prevState) => {
            return { ...prevState, s: s };
        });
    };

    const search = (e) => {
        if (e.key === "Enter") {
            const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=vi-VN&query=${state.s}&page=1&include_adult=false`
            axios(searchUrl).then(
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
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=vi-VN`).then(({ data }) => {
            setState(prevState => ({ ...prevState, selected: data }));
        });

        // Fetch video key
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}&language=vi-VN`).then(({ data }) => {
            if (data.results && data.results.length > 0) {
                // Find a YouTube trailer video
                const trailer = data.results.find(video => video.site === "YouTube" && video.type === "Trailer");
                if (trailer) {
                    setState(prevState => ({ ...prevState, videoKey: trailer.key }));
                } else {
                    setState(prevState => ({ ...prevState, videoKey: null }));
                }
            } else {
                setState(prevState => ({ ...prevState, videoKey: null }));
            }
        });
    };


    const closeDetail = () => {
        setState((prevState) => {
            return { ...prevState, selected: {}, videoKey: null };
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{color:"red"}}> TẤT CẢ DANH SÁCH PHIM</h1>
            </header>
            <main>
                <Search
                    searchInput={searchInput}
                    search={search}
                />

                <div className="container">
                <div className="results">
                    {Array.isArray(state.results) && state.results.map((e) => (
                        <div
                            className="item"
                            onClick={() =>
                                openDetail(e.id)
                            }
                        >
                            <img
                                style={{ width: "200px" , marginTop: "10px" }}
                                src={"https://image.tmdb.org/t/p/w200" + e.poster_path}
                            />
                            <h3 style={{ color: "white" }}>
                                {e.title}
                            </h3>
                            <p style={{ color: 'white' }}> Số lượt bình chọn: <span style={{ color: 'tomato' }}>{e.vote_count}</span></p>
                            <p style={{ color: 'white' }}>Đánh giá: <span style={{ color: 'yellow' }}> {e.vote_average}</span></p>

                        </div>
                    ))}
                </div>
                </div>

                {typeof state.selected.title !=
                    "undefined" ? (
                    <Detail
                        selected={state.selected}
                        closeDetail={closeDetail}
                        videoKey={state.videoKey}
                    />
                ) : (
                    false
                )}
            </main>
        </div>
    );
}

export default App;
