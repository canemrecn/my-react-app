import React from 'react'; // React kütüphanesini içeri aktarır
import { useFilm } from './FilmContext'; // Film bağlamını kullanmak için useFilm hook'unu içeri aktarır

function PosterContainer() {
  const { moviePosters } = useFilm(); // Film bağlamından film afişlerini alır

  const showPoster = () => { // Afiş gösterme işlevini tanımlar
    const randomIndex = Math.floor(Math.random() * moviePosters.length); // Rastgele bir afiş indeksi oluşturur
    const randomPoster = moviePosters[randomIndex]; // Rastgele bir afişi seçer
    
    const moviePoster = document.getElementById('moviePoster'); // Afiş elementini alır
    moviePoster.src = randomPoster; // Seçilen afişi gösterir
    
    const posterContainer = document.getElementById('posterContainer'); // Afiş konteyner elementini alır
    posterContainer.style.display = 'block'; // Afiş konteynerini görünür yapar
    
    const showPosterButton = document.getElementById('showPosterButton'); // Afiş gösterme butonunu alır
    showPosterButton.style.display = 'none'; // Afiş gösterme butonunu gizler
  };

  return ( // PosterContainer bileşenini oluşturur
    <div className="container text-center">
      <button id="showPosterButton" className="btn btn-outline-warning" onClick={showPoster}><h2>IMDB En İyi 100 Filmleri Ruletini Başlat</h2></button> {/* Afiş gösterme butonu */}
      <div id="posterContainer" style={{ display: 'none' }}> {/* Afiş konteyneri */}
        <img id="moviePoster" src="" alt="Movie Poster" /> {/* Afiş görüntüsü */}
      </div>
    </div>
  );
}

export default PosterContainer; // PosterContainer bileşenini dışa aktarır

