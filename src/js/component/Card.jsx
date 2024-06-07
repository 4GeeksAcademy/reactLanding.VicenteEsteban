import React from "react";


const Card= (props) => {
    return (

    <div className=" ">
        <div className="card h-100">
        <img src={props.img}  className="image-size-card card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
        </div>
        <div className="card-footer">
            <div className="d-grid gap-2 d-md-block">
                <button className="btn btn-primary" type="button">{props.button}</button>
            </div>
        </div>
        </div>
    </div>

    )
}





export default Card;