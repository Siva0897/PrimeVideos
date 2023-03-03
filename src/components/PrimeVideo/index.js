// Write your code here
import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )
  const actionMoviesList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )
  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-img"
      />
      <h1 className="sub-title">Action Movies</h1>
      <MoviesSlider moviesList={actionMoviesList} />
      <h1 className="sub-title">Comedy Movies</h1>
      <MoviesSlider moviesList={comedyMoviesList} />
    </div>
  )
}

export default PrimeVideo
