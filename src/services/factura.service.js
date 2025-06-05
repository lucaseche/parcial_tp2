import Factura from '../models/factura.model.js';

class FacturaService {
    constructor(){
       this.facturas = new Factura(); 
    }

    getFacturas = async () => {
        return await this.facturas.getFacturas();
    };

    getFacturasPorTipo = async (tipo) => {
        const facturas = await this.facturas.getFacturasPorTipo(tipo);
        if (facturas.length === 0) {
            throw new Error("No existen facturas de ese tipo.");
        }
        return facturas;
    }
    
    getFacturasPorEstado = async (estado) => {
        const facturas = await this.facturas.getFacturasPorEstado(estado);
        if (facturas.length === 0) {
            throw new Error("No existen facturas de ese estado.");
        }
        return facturas;
    }

    postFactura = async (newFactura) => {
        return await this.facturas.postFactura(newFactura);
    };
}    

export default FacturaService;