import express from 'express';
import Router from './src/routes/factura.route.js';

const PORT = 8080;
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api", new Router().startRoutes())

app.use((req, res) => {
    res.status(404).json({
        code: 404,
        message: "Not found."
    })
})

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`))