const { db } = require("../demo_db_connection");

const khanaIndex = async (req, res) => {
  try {
    const [data] = await db.execute("SELECT * FROM dish");

    res.render("pages/index", { data });
  } catch (err) {
    console.log("Error", err);
  }
};

const khanaDescription = async (req, res) => {
  try {
    const khanaId = parseInt(req.params.id);

    const [dataToRender] = await db.query(
      `SELECT * FROM dish WHERE iddish = ?`,
      [khanaId]
    );

    res.render("pages/detail", { data: dataToRender[0] });
  } catch (err) {
    console.log("Error", err);
  }
};

const khanaPurchased = async (req, res) => {
  try {
  } catch (err) {
    console.log("Error", err);
  }
};

module.exports = { khanaIndex, khanaDescription, khanaPurchased };
