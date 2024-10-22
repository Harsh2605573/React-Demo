import React from 'react'
import { Card } from 'react-bootstrap'


function Cardd(props) {
    return (
        <>
            <div className="cad-body">
                <div className="card">
                    <div className="card-img">
                        <img src={props.img} alt="image" width={'100%'} />
                    </div>
                    <div className="card-body">
                        <div className="card-titel">
                            <h2>{props.Name}</h2>
                            <div className="box-title">
                                <div className="box"></div>
                                <h6>Alive - Aline</h6>
                            </div>
                        </div>
                        <div className="card-clt">
                            <span>Last Known Location:</span>
                            <a href=""><h5>Signus 5 Expanse</h5></a>
                        </div>
                        <div className="card-clt">
                            <span>First Seen in:</span>
                            <a href=""><h5>Get Schwifty</h5></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cardd;
