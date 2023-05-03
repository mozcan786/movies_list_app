
  export const API_ENDPOINTS = {

    // getUsers
    getUsers: {
        url: 'https://api.themoviedb.org/3/movie/popular?api_key=bfb5af5be609f3f8e791c601eca04dc0&language=en-EN&page=1',
        method: 'get',
    },
    // post
    getNowPlaying: {
        url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=bfb5af5be609f3f8e791c601eca04dc0&language=en-US&page=3',
        method: 'get',
    },
    
    getTrend: {
        url: 'https://api.themoviedb.org/3/movie/trending/all/day?api_key=bfb5af5be609f3f8e791c601eca04dc0&language=en-US&page=3',
        method: 'get',
    }
    // ve diğer endpointler burada yer alabilir
};


