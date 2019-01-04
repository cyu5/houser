import React, { Component } from "react";

// Redux Imports
import { connect } from "react-redux";
import { updateHouses, updateInput } from "../../reducer";

// axios imports
import axios from "axios";

// react-router imports
import { Link, Switch, Route } from "react-router-dom";

// children component imports
import WizardOne from "./WizardOne";
import WizardTwo from "./WizardTwo";
import WizardThree from "./WizardThree";

class Wizard extends Component {
  completeWizard = () => {
    const house = this.props;
    axios.post(`/api/house`, house).then(res => {
      axios.get("/api/house").then(res => {
        const houses = res.data;
        this.props.updateHouses(houses);
        console.log(`Added new house to list. Houses:`, houses);
      });
    });
  };

  // important: children can dispatch to reducer using this method
  // updateInput = (input, prop) => {
  //   this.props.updateInput(input, prop);
  // };

  render() {
    const { name, address, city, state, zip, img, mortgage, rent } = this.props;
    const { updateInput } = this.props;

    return (
      <div className="Wizard">
        <h1>Add New Listings</h1>
        <Link to="/">
          <button>Cancel</button>
        </Link>

        <Switch>
          <Route
            exact
            path="/wizard"
            render={() => (
              <WizardOne
                name={name}
                address={address}
                city={city}
                state={state}
                zip={zip}
                updateInput={updateInput}
              />
            )}
          />
          <Route
            path="/wizard/step2"
            render={() => <WizardTwo img={img} updateInput={updateInput} />}
          />
          <Route
            path="/wizard/step3"
            render={() => (
              <WizardThree
                mortgage={mortgage}
                rent={rent}
                completeWizard={this.completeWizard}
                updateInput={updateInput}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(storeState) {
  const { name, address, city, state, zip, img, mortgage, rent } = storeState;
  return { name, address, city, state, zip, img, mortgage, rent };
}

const mapDispatchToProps = { updateHouses, updateInput };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wizard);
