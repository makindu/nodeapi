const { Op } = require("sequelize");
const { client } = require("../../db.provider");

const ClientController = {};

ClientController.create = async (req, res) => {
  if (!req.body.fullname || !req.body.phoneNumber) {
    res.status(400).send({
      message: "Error",
      error: "Veuillez envoyer tous les champs",
      data: null,
    });
    return;
  }

  const clientData = ({ fullname, phoneNumber, address } = req.body);

  try {
    const result = await client.create(clientData);
    res.status(200).send({
      message: "Success",
      error: null,
      data: result,
    });

    return;
  } catch (error) {
    res.status(500).send({
      message: "Error",
      error: error.toString(),
      data: null,
    });
    return;
  }
};

ClientController.getAll = async (req, res) => {
  let condition = {};
  if (req.params.value) {
    condition = {
      [Op.or]: { fullname: req.params.value, phoneNumber: req.params.value },
    };
  }
  try {
    let result = await client.findAll({ where: condition });
    res.status(200).send({ message: "success", error: null, data: result });
    return;
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error", error: error.toString(), data: null });
    return;
  }
};

ClientController.findOne = async (req, res) => {
  try {
    let result = await client.findByPk(req.params.id);
    res.status(200).send({ message: "success", error: null, data: result });
    return;
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error", error: error.toString(), data: null });
    return;
  }
};

ClientController.update = async (req, res) => {
  try {
    let result = await client.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).send({ message: "success", error: null, data: result });
    return;
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error", error: error.toString(), data: null });
    return;
  }
};

ClientController.delete = async (req, res) => {
  try {
    let result = await client.destroy({
      where: { id: req.params.id },
    });
    res.status(200).send({ message: "success", error: null, data: result });
    return;
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error", error: error.toString(), data: null });
    return;
  }
};

module.exports = ClientController;
