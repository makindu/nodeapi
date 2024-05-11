const router = require("express").Router();

router.use("/users", require("./src/users/user.route"));
router.use("/clients", require("./src/clients/client.route"));
module.exports = router;
