import p1 from './assets/images/p1.jpg';
import p2 from './assets/images/p2.jpg';
import p3 from './assets/images/p3.jpg';


function CardsComponent(){
  return(
     
      <div className="row justify-content-md-center services">
              <CardComponent 
                  image={p1} 
                  imageAlt="UI design"
                  title="User Interface Design"  
                  text="Prototyping" 
                />
           
          
             <CardComponent 
                  image={p2} 
                  imageAlt="Ideas"
                  title="Concept and Ideas"  
                  text="Digital branding" 
                />
         
         
             <CardComponent 
                  image={p3} 
                  imageAlt="Design"
                  title="Design and branding"  
                  text="Graphic Design" 
                />
      </div>
       
  )
}



function CardComponent(props){
  return(
    <div className="col-md-auto">
      <div className="card">
          <img src={props.image} className="card-img-top imgCard" alt={props.imageAlt} />
          <div className="card-body">
               <h5 className="card-title">{props.title}</h5>
               <p className="card-text">{props.text}</p>
          </div>

      </div>
    </div>
  )
}


export default CardsComponent;
