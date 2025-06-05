class Factura{
    constructor(){
        this.facturas = [
            {id: 1, numero: "00010", tipo: "A", monto: 1405200, estado: "pendiente de pago"},
            {id: 2, numero: "00342", tipo: "C", monto: 200, estado: "pagado"},
        ];
    }

    getFacturas = async () => {
            return this.facturas;
    };

    getFacturasPorTipo = async (tipo) => {
        const facturasFiltradas = this.facturas.filter(factura => factura.tipo === tipo);
        return facturasFiltradas.length ? facturasFiltradas : [];
    };

    getFacturasPorEstado = async (estado) => {
        const facturasFiltradas = this.facturas.filter(factura => factura.estado === estado);
        return facturasFiltradas.length ? facturasFiltradas : [];
    };

    postFactura = async (newFactura) => {
        newFactura.id = this.facturas.length ? this.facturas[this.facturas.length - 1].id + 1 : 1;
        this.facturas.push(newFactura); 
        return newFactura;
    };
}

export default Factura;