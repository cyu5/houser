module.exports = {
  getHouses(req, res, next) {
    const db = req.app.get("db");
    db.get_houses()
      .then(houses => {
        res.json(houses);
      })
      .catch(err => {
        res.sendStatus(500);
        console.log(`Error query db - get houses.`);
        console.log(err);
      });
  },

  addHouse(req, res, next) {
    const db = req.app.get("db");
    const { name, address, city, state, zip, img, mortgage, rent } = req.body;
    const house = { name, address, city, state, zip, img, mortgage, rent };

    // input error checking
    house.zip = +zip || 0;
    house.mortgage = +mortgage || 0;
    house.rent = +rent || 0;

    db.add_house(house)
      .then(house => {
        res.send(`successfully added house`);
      })
      .catch(err => {
        res.sendStatus(500);
        console.log(`Error query db - add houses.`);
        console.log(err);
      });
  },

  deleteHouse(req, res, next) {
    const db = req.app.get("db");
    const { id } = req.params;
    // console.log(`deleting house with id: `, req.params);

    db.delete_house({ id: +id })
      .then(house => {
        // console.log(`deleted house:`, house);
        res.send(`successfully deleted house`);
      })
      .catch(err => {
        res.sendStatus(500);
        console.log(`Error query db - delete houses.`);
        console.log(err);
      });
  }
};
