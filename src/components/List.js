import React from "react";
import "./List.css";

function Cart(props) {
    let users = (
        <p>
            <i className="fas fa-check"></i> {props.users}
        </p>
    );
    let storage = (
        <p>
            <i className="fas fa-check"></i> {props.storage}
        </p>
    );
    let publicProject = (
        <p>
            <i className="fas fa-check"></i> Unlimited Public Projects
        </p>
    );
    let communityAccess = (
        <p>
            <i className="fas fa-check"></i> Community access
        </p>
    );
    let privateProject;
    if (props.privateProject){
    privateProject = (
            <p>
                <i className="fas fa-check"></i> Unlimited Private Projects
            </p>
        );
     } else{
    privateProject = (
            <p className="muted">
                <i className="fas fa-times"></i> Unlimited Private Projects
            </p>
        );
    }

    let support; 
    if (props.support){
        support = (
            <p>
                <i className="fas fa-check"></i> Dedicated Phone Support
            </p>
        );
         } else{
        support = (
            <p className="muted">
                <i className="fas fa-times"></i> Dedicated Phone Support
            </p>
        );
         }

    let domain;
    if (props.domain){
        domain = (
            <p>
                <i className="fas fa-check"></i>
                <span className="domain-type">{props.domain}</span> Free Subdomain
            </p>
        );
        }else{
        domain = (
            <p className="muted">
                <i className="fas fa-times"></i> Free Subdomain
            </p>
        );
        }

    let report;
    if (props.report){
        report = (
            <p>
                <i className="fas fa-check"></i> Monthly Status Reports
            </p>
        );
        }else{
        report = (
            <p className="muted">
                <i className="fas fa-times"></i> Monthly Status Reports
            </p>
        );
        }

    return (
        <div className="card-group" >
            <div className="card-header" >
                <p className=" card-title muted">{props.cardType}</p>
                <div className="card-price">
                    <h1>
                        ${props.price}
                        <span className="period">/month</span>
                    </h1>
                </div>
            </div><br></br>

            <ul>
                <li>{users}</li>
                <li>{storage}</li>
                <li>{publicProject}</li>
                <li>{communityAccess}</li>
                <li>{privateProject}</li>
                <li>{support}</li>
                <li>{domain}</li>
                <li>{report}</li>
            </ul>
            <button className="button">Button</button>
        </div>
    );
}

export default Cart;