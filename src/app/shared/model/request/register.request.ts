export class RegisterRequest {
    corr: string;
    noms: string;
    apells: string;
    fechaNaci: Date;
    dni: string;
    passs: string;

    constructor(
        corr: string = '',
        noms: string = '',
        apells: string = '',
        fechaNaci: Date = new Date(),
        dni: string = '',
        passs: string = ''
    ) {
        this.corr = corr;
        this.noms = noms;
        this.apells = apells;
        this.fechaNaci = fechaNaci;
        this.noms = noms;
        this.passs = passs;
    }

}