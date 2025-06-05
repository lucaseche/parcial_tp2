import FacturaController from "../controllers/factura.controller.js";
import express from "express";

class Router {
    constructor() {
        this.router = express.Router();
        this.facturaController = new FacturaController();
    }

    startRoutes() {
        this.router.get("/facturas", this.facturaController.getFacturas);
        this.router.get("/facturasPorTipo/:tipo", this.facturaController.getFacturasPorTipo);
        this.router.get("/facturasPorEstado/:estado", this.facturaController.getFacturasPorEstado);
        this.router.post("/facturas", this.facturaController.postFactura);
        return this.router;
    }
}

export default Router;