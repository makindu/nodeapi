const router = require("express").Router();
const ClientController = require("./client.controller");

router.get("/all/:value?", ClientController.getAll);
router.post("/", ClientController.create);
router.get("/:id", ClientController.findOne);
router.put("/:id", ClientController.update);
router.delete("/:id", ClientController.delete);

module.exports = router;
