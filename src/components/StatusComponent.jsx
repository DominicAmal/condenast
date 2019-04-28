import React, { Component } from 'react';



class StatusComponent extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const availableStatus = this.props.availableStatus;
        const path = "../assets/images/";
        const status = availableStatus.map((value,key) => {

            console.log(key);
            
            return (
                <span>
                <h3>{Object.keys(value)[0]}</h3>
                <img
                key={key}
                width={50}
                height={50}
                alt={Object.keys(value)[0]}
                src={Object.values(value)[1]}    
            />
            </span>
            )
        });
        
        return (
            <div className="flex">
                {status}
            </div>
        );
    }
}

export default StatusComponent;