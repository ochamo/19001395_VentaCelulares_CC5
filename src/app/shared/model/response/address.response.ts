export class AddressResponse {
    public idDireccion: number;
    public idUsuario: number;
    public idMunicipio: number;
    public nombreMuni: string;
    public nombreDep: string;
    public nombreDir: string;
    public zona: number;
    public avenida: string;
    public calle: string;

    constructor(
        idDireccion: number = 0,
        idUsuario: number = 0,
        idMunicipio: number = 0,
        nombreMuni: string = '',
        nombreDir: string = '',
        nombreDep: string = '',
        zona: number = 0,
        avenida: string = '',
        calle: string = '',
    ) {
        this.idDireccion = idDireccion;
        this.idUsuario = idUsuario;
        this.nombreDir = nombreDir;
        this.idMunicipio = idMunicipio;
        this.nombreMuni = nombreMuni;
        this.nombreDep = nombreDep;
        this.zona = zona;
        this.avenida = avenida;
        this.calle = calle;
    }

}