import React from 'react';
import GetStatusImage from "./GetStatusImage";

const DisplayByDateComponent = (props) => {
    const { statusByDate } = props;
    // console.log(props);
    
    const title = (
        <>
            <span className="data-title">
                {Object.keys(props).map(function(key) {
                    {
                        if(key == 'title')
                            return (
                                <span
                                    key={key}>
                                    {props.title}
                                </span>
                            );
                    }
                })}
            </span>
        </>
  );
    const dateBased = (
            <>
                <span className="flex">
                    {statusByDate &&
                        statusByDate.map((byDate, index) => {
                        return (
                        <h3 key={index}>
                            {byDate.date}
                        </h3>
                        );
                    })}
                </span>
            </>
      );
      const statusImage  = (
        <>
          <span className="flex">
            {statusByDate &&
              statusByDate.map((byDate, index) => {
                return (
                  <h3 >
                    <GetStatusImage key={index} status={byDate.status} />
                  </h3>
                );
              })}
          </span>
        </>
      );
    return (
        <div className="dom"> 
            {title}
            {statusImage}
            {dateBased}
        </div>
    );
};

export default DisplayByDateComponent;