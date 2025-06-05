import FacturaService from "../services/factura.service.js";

class FacturaController {
    constructor() {
        this.facturaService = new FacturaService();
    }

    getFacturas = async (req, res) => {
        try {
            const facturas = await this.facturaService.getFacturas();
            res.status(200).json(facturas);
        } catch (error) {
            res.status(500).json({ error: 'Error buscando facturas' });
        }
    };

    getFacturasPorTipo = async (req, res) => {
        try {
            const { tipo } = req.params;
            if (!tipo) {
                return res.status(400).json({ error: 'El tipo de factura es requerido' });
            }
            const facturas = await this.facturaService.getFacturasPorTipo(tipo);
            res.status(200).json(facturas);
        } catch (error) {
            if (error.message === "No existen facturas de ese tipo.") {
                return res.status(404).json({ error: error.message });
            }
            res.status(500).json({ error: 'Error buscando facturas por tipo' });
        }
    }

    getFacturasPorEstado = async (req, res) => {
        try {
            const { estado } = req.params;
            if (!estado) {
                return res.status(400).json({ error: 'El estado de factura es requerido' });
            }
            const facturas = await this.facturaService.getFacturasPorEstado(estado);
            res.status(200).json(facturas);
        } catch (error) {
            if (error.message === "No existen facturas de ese estado.") {
                return res.status(404).json({ error: error.message });
            }
            res.status(500).json({ error: 'Error buscando facturas por estado' });
        }
    }

    postFactura = async (req, res) => {
        try {
            const newFactura = req.body;
            // Estos campos son obligatorios por ejemplo para obtener las "vistas" 
            // que requiere el enunciado
            if (!newFactura.numero || !newFactura.tipo || !newFactura.monto || !newFactura.estado) {
                return res.status(400).json({ error: 'Faltan campos obligatorios' });
            }
            const createdFactura = await this.facturaService.postFactura(newFactura);
            res.status(201).json(createdFactura);
        } catch (error) {
            res.status(500).json({ error: 'Error creando nueva factura' });
        }
    };
}
export default FacturaController;
