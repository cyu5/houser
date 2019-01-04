import axios from "axios";
import { updateHouses } from "./reducer";

const axiosman = {
  getHouses() {
    axios.get("/api/house").then(res => {
      const houses = res.data;
      console.log(`Got new house list:`, houses);
      updateHouses(houses);
      return houses;
    });
  },

  deleteHouse(id) {
    axios.delete(`/api/house/${id}`).then(() => {
      console.log(`delete house request complete. house id: ${id}`);
      this.getHouses();
    });
  }
};

export default axiosman;
