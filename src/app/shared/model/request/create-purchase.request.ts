import { PagoRequest } from "./pago.request";
import { PedidoRequest } from "./pedido.request";

export class CreatePurchaseRequest {
    constructor(
        public nitN: string = '',
        public nombreCli: string = '',
        public itemToPurchase: number = 0,
        public pagoInfo: PagoRequest = new PagoRequest(),
        public pedidoInfo: PedidoRequest = new PedidoRequest(),
    ) { }
}