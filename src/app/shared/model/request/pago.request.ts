export class PagoRequest {
    numTarj: string;
    tot: number;

    constructor(
        numTarjeta: string = '',
        total: number = 0
    ) {
        this.numTarj = numTarjeta;
        this.tot = total;
    }

}