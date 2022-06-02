export class UpdateStockRequest {
    cant: number;
    idCel: number;

    constructor(
        cant: number = 0,
        idCel: number = 0
    ) {
        this.cant = cant;
        this.idCel = idCel;
    }

}