const express = require('express');
const app = express();

app.use(express.static("./static"))

// app.use((req, res, next) => {
//     console.log(req.url);
//     next();
// })

app.use(require('./router.js'));

app.listen(8080, () => {
    console.log("Listening on port 8080");
});
