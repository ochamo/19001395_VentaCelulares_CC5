export class CellphoneResponse {
    idCelular: number;
    cantidad: number;
    imagen: string;
    descripcion: string;
    caracteristicas: string;
    model: string;
    precio: number;
    numSerie: string;

    constructor(
        idCelular: number = 0,
        cantidad: number = 0,
        imagen: string = '',
        model: string = '',
        descripcion: string = '',
        precio: number = 0,
        numSerie: string = '',
        caracteristicas: string = ''
    ) {
        this.idCelular = idCelular;
        this.cantidad = cantidad;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.model = model;
        this.precio = precio;
        this.numSerie = numSerie;
        this.caracteristicas = caracteristicas;
    }

}