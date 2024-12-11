const MovieCard = ({ movie }) => {
  return (
    <div className='movie'>
      <div>
        <p>{movie.year}</p>
      </div>
      <div>
        <image
          src={
            movie.poster !== 'N/A'
              ? movie.poster
              : (movie.poster = 'https:via.placeholder.com/400')
          }
          alt={movie.title}
        />
      </div>
      <div>
        <span>{movie.type}</span>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
