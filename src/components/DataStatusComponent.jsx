import React from 'react';
import DisplayByDate from './DisplayByDateComponent';
const DataStatusComponents = (props) => {
    const { data } = props;
    return (
        <div className="data-component">
            {data && Object.keys(data).map(value => {
              if (value !== "RefreshTime") {
                return (
                  <AnalyticsData
                    name={value}
                    dataStatus={data[value]}
                  />
            );
          }
        })}
        </div>
    );
};
const AnalyticsData = props => {
    const { dataStatus } = props;
    return (
     <div>
        <h2>{props.name}</h2>
        {dataStatus &&
          Object.values(dataStatus).map((status, key) => {
            return (
              <>
                <DisplayByDate
                  title={status.name}
                  statusByDate={status.statusByDate}
                />
              </>
            );
        })}
      </div>
    );
  };

export default DataStatusComponents;