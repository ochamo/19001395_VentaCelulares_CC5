export class MuniResponse {
    public idMuni: number;
    public nombreMuni: string;

    constructor(idMuni: number = 0, nombreMuni: string = '') {
        this.idMuni = idMuni;
        this.nombreMuni = nombreMuni;
    }

}