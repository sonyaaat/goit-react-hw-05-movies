import axios from 'axios';
const KEY=`0d85f901dc2f856c4326c302a68bd324`
export const popularList=()=>{
   const response= axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`)
   return response
}
export const findByName=(query)=>{
    const response= axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}&page=1`)
    return response
}
export const findDetails=(id)=>{
    const response=axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`)
    return response
}
export const findCast=(id)=>{
    const response=axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`)
    return response
}
export const findReviews=(id)=>{
    const response=axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`)
    return response
}