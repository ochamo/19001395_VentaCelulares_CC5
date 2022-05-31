export class NitResponse {
    public idNit: number;
    public idUsuario: number;
    public nombreNit: string;
    public nit: string;

    constructor(
        idNit: number = 0,
        idUsuario: number = 0,
        nombreNit: string = '',
        nit: string = ''
    ) {
        this.idNit = idNit;
        this.idUsuario = idUsuario;
        this.nombreNit = nombreNit;
        this.nit = nit;
    }

}