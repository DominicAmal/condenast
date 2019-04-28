import React, {Component} from 'react';
import './App.css';
import axios from "axios";
import HeaderComponent from './components/HeaderComponent';
import DataComponent from './components/DataComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    axios
      .get("data/data.json")
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log(error);        
        // toastr.error(error);
      });
  };
  render() {
    const { RefreshTime: refreshTime } = this.state.data;
    return (
      <div className="App">
        <header className="App-header">
          <HeaderComponent
          refreshTime={refreshTime}
          />
        </header>

        <DataComponent data={this.state.data}/>
      </div>
    );
  }
}

export default App;
