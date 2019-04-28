import React, { Component } from 'react';
import DataStatus from "./DataStatusComponent";

class DataComponent extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        const { data } = this.props;
        return (
            <div>
                <DataStatus data={data}/>
            </div>
        );
    }
}

export default DataComponent;