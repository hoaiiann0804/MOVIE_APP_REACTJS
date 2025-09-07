// Filename - components/Detail.js

import React from "react";

function Detail({ selected, closeDetail, videoKey }) {
    // Extract year from release_date if available
    const releaseYear = selected.release_date ? selected.release_date.split("-")[0] : "";

    return (
        <section className="detail">
            <div className="content">
                <h2 style={{color: "#ffffff"}}>{selected.title}</h2>
                <span>Phát hành: <span className="release-date" style={{color: "#E50914"}}>{releaseYear}</span> </span> <br /> 
                <span className="genres">Thể loại:{selected.genres.map((genre) => (
                        <span className="genre" style={{color: "#E50914"}} key={genre.id}>{genre.name}</span>
                    ))}
                </span>
              <br />
                <span className="rating">
                    Rating: <span style={{color: "#E50914"}}>{selected.vote_average} ({selected.vote_count} votes)</span>
                </span>
                <div className="about">
                    <img src={"https://image.tmdb.org/t/p/w200" + selected.poster_path} alt={selected.title} />
                </div>
                <div className="overview" style={{color: "#ffffff"}}>{selected.overview}</div>

                {videoKey && (
                    <div className="video-container" style={{ marginTop: "20px" }}>
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${videoKey}`}
                            title="Video trailer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}

                <button
                    className="close"
                    onClick={closeDetail}
                >
                    Close
                </button>
            </div>
        </section>
    );
}

export default Detail;
