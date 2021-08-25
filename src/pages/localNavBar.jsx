import { useState } from 'react';

function LocalNavBar(){
    

    //how searchDisplay is implemented to sort the array????
    const [searchDisplay, setSearchDisplay] = useState("");
    const [searchTerm,getSearchValue ] = useState("");

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
            <div className="container-fluid">
                <button className="navbar-brand" href="#">HOME</button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavAltMarkup" 
                        aria-controls="navbarNavAltMarkup" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <form className="d-flex">
                            <input className="form-control me-2" 
                                    type="search" 
                                    placeholder="Search" 
                                    aria-label="Search"
                                    onChange={e=>getSearchValue(e.target.value)} 
                                    value={searchTerm} />
                            <button 
                                    className="btn btn-outline-success" 
                                    onClick={()=>setSearchDisplay(searchTerm)}
                                    >Search </button>
                        </form>
                    </div>
                </div>
                <div>{searchDisplay}</div>
            </div>
        </nav>
    );
}

export default LocalNavBar;