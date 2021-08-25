// generate one card

function MovieCardComponent({MovieModel}){

    const pathPre = process.env.PUBLIC_URL;
  
    const  imgsrc = pathPre +"/" + MovieModel.PosterImage; //pathPre.concat(PersonModel.Image);
  
      return(
        <div className="row movieCardRow">
            <div className="col-sm">
                <h2>{MovieModel.MovieName}</h2>
                <img src={imgsrc} className="card-img-top imgCard" alt={MovieModel.MovieName} />
                <br/>
                <h5 className="card-title">Director: {MovieModel.Director}</h5>
            </div>
            <div className="col-sm">
                <br/>
                Time: (min.)  {MovieModel.LengthInMinutes} 
                <h4>Main Actors</h4>
                      <ul className="actorsList">
                       {MovieModel.MainStars.map((person, index) => (
                            <li key={index}> {person} </li>
                        ))}
                      </ul>
              </div>
        </div>  
      )
    }
    
  
    export default MovieCardComponent;
    