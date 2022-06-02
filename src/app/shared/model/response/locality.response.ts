import { MuniResponse } from "./munis.response";

export class LocalityResponse {
    public idDep: number;
    public nombreDep: string;
    public munis: MuniResponse[];

    constructor(
        idDep: number = 0,
        nombreDep: string = '',
        munis: MuniResponse[] = []
    ) {
        this.idDep = idDep;
        this.nombreDep = nombreDep;
        this.munis = munis;
    }

}