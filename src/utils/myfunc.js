// favori filmleri yerel depolama alanında saklamak için fonksiyon
export function addToFavorites(movie) {

    // yerel depolama alanındaki favori filmleri al
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // aynı filmi eklemeyi engelle
    if (favorites.find(favorite => favorite.id === movie.id)) {
        return;
    }

    // yeni favori filmi ekle
    favorites.push(movie);

    // favori filmleri yerel depolama alanına kaydet
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// favori filmleri yerel depolama alanından kaldırmak için fonksiyon
export function removeFromFavorites(fav) {
    // yerel depolama alanındaki favori filmleri al
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // filmin indeksini bul
    const index = favorites.findIndex(favorite => favorite.id === fav.id);

    // filmin bulunduğundan emin ol
    if (index === -1) {
        return;
    }

    // filmden favorilerden çıkar
    favorites.splice(index, 1);

    // favori filmleri yerel depolama alanına kaydet
    localStorage.setItem('favorites', JSON.stringify(favorites));
}


export function addToHistory(history) {
    // yerel depolama alanındaki izlenen filmleri al
    let histories = JSON.parse(localStorage.getItem('histories')) || [];

    // aynı filmi eklemeyi engelle
    if (histories.find(favorite => favorite.id === history.id)) {
        return;
    }

    // yeni izlenen filmi ekle
    histories.push(history);

    // izlenen filmleri yerel depolama alanına kaydet
    localStorage.setItem('histories', JSON.stringify(histories));
}

// izlenen filmleri yerel depolama alanından kaldırmak için fonksiyon
export function removeFromHistories(history) {
    // yerel depolama alanındaki izlenen filmleri al
    let histories = JSON.parse(localStorage.getItem('histories')) || [];

    // filmin indeksini bul
    const index = histories.findIndex(h => h.id === history.id);

    // filmin bulunduğundan emin ol
    if (index === -1) {
        return;
    }

    // filmden izlenenlerden çıkar
    histories.splice(index, 1);

    // izlenen filmleri yerel depolama alanına kaydet
    localStorage.setItem('histories', JSON.stringify(histories));
}  