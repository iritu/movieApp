// generate one card

function PersonCardComponent({PersonModel}){

  const pathPre = process.env.PUBLIC_URL;

  const  imgsrc = pathPre +"/" + PersonModel.Image; //pathPre.concat(PersonModel.Image);

    return(
      <div className="col-md-auto">
        <div className="card">
            <img src={imgsrc} className="card-img-top imgCard" alt={PersonModel.FirstName} />
            <div className="card-body">
                 <h5 className="card-title">{PersonModel.FirstName} {PersonModel.LastName}</h5>
                 <p className="card-text">

                <button
                    type="button"
                    className="btn btn-outline-dark btn-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href=PersonModel.Link;
                      }}
                > Click here</button>

                
                    <br/>
                    Age: {PersonModel.age}
                 </p>
            </div>
  
        </div>
      </div>
    )
  }
  

  export default PersonCardComponent;
  