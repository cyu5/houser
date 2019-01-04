import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Wizard from "./components/Wizard/Wizard";
import { HashRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { updateHouses } from "./reducer";
import axios from "axios";
import routes from "./routes";

class App extends Component {
  componentDidMount = () => {
    this.getHouses();
  };

  getHouses = () => {
    console.log(`requesting houses from server`);
    axios.get("/api/house").then(res => {
      const houses = res.data;
      this.props.updateHouses(houses);
      console.log(`Got new house list:`, houses);
    });
    // axiosman.getHouses().then(houses => {
    //   this.props.updateHouses(houses);
    //   console.log(`Houses from promise chaining. `, houses);
    // });
  };

  // gotta figure out an easy way to pass this down to houses state
  // component will unmount???
  deleteHouse = id => {
    axios.delete(`/api/house/${id}`).then(() => {
      console.log(`delete house request complete. house id: ${id}`);
      this.getHouses();
    });
    // axiosman.deleteHouse();
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <div className="container">
            <HashRouter>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Dashboard deleteHouse={this.deleteHouse} />}
                />
                <Route path="/wizard" component={Wizard} />
              </Switch>
            </HashRouter>
          </div>
        </main>
      </div>
    );
  }
}

// export default App;

function mapStateToProps(state) {
  return { houses: state.houses };
}

const mapDispatchToProps = { updateHouses };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
