import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateHouses } from "../../reducer";
import axios from "axios";
import axiosman from "../../axiosman";

class Dashboard extends Component {
  render() {
    const { houses } = this.props;

    // lets map over houses!!!
    const houseList = houses.map(house => {
      return (
        <House
          key={house.id}
          house={house}
          deleteHouse={this.props.deleteHouse}
        />
      );
    });

    return (
      <div className="Dashboard">
        <div className="headline">
          <h2>Dashboard</h2>
          <Link to="/wizard">
            <button>Add New Property</button>
          </Link>
        </div>
        <hr />
        <h3 className="headline">Home Listings</h3>
        {houseList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { houses: state.houses };
}

const mapDispatchToProps = { updateHouses };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
