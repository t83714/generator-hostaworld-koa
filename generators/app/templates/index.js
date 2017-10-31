import app from "./src/app";

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`listening on port ${port}`);
console.log(`Please access app from URL: http://localhost:${port}/`);
