export class PedidoRequest {
    idDirecc: number;
    idEstatu: number;

    constructor(
        idDirecc: number = 0,
        idEstatu: number = 1
    ) {
        this.idDirecc = idDirecc;
        this.idEstatu = idEstatu;
    }

}