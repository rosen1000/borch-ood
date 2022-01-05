const router = require("express").Router();
const ejs = require("ejs");

router.get("/", async (req, res) => {
    res.send(await ejs.renderFile('./site.ejs'));
    // res.send("<h1>uwu</h1>");
});

router.get('/admin', (req, res) => {
    res.send("hi");
})

module.exports = router;
