import React, { Component } from 'react';
import TitleComponent from './TitleComponent';
import RefreshTimeComponent from './RefreshTimeComponent';
import StatusComponent from './StatusComponent';
import complete from "../assets/images/complete.png";
import noload from "../assets/images/no-load.png";
import partial from "../assets/images/partial-load.png";
import quality from "../assets/images/quality-alert.png";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            availableStatus:[
              {complete: "Complete",img:complete},
              {qualityAlert: "Quality Alert",img:quality},
              {partialLoad: "Partial Load",img:partial},
              {noLoad: "No Load",img:noload},
            ]
          };
    }
    
    render() {
        const { refreshTime } = this.props;
        const { availableStatus } = this.state;
        return (
            <div className="header">
                <TitleComponent title="Data Status" name="Condé Nast"/>
                <RefreshTimeComponent refreshTime={refreshTime}/>
                <StatusComponent availableStatus={availableStatus}/>
            </div>
        );
    }
}

export default HeaderComponent;