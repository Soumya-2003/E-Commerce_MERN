import express from 'express';
const port = 4000;
const app = express();
app.listen(port, () => {
    console.log(`Server os working on http://localhost:${port}`);
});
