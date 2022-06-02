export class CreateCellphoneRequest {
    cant: number;
    img: string;
    descr: string;
    caract: string;
    model: string;
    preci: number;
    numSeri: string;

    constructor(
        cant: number = 0,
        img: string = '',
        descr: string = '',
        caract: string = '',
        model: string = '',
        preci: number = 0,
        numSeri: string = ''
    ) {
        this.cant = cant;
        this.img = img;
        this.descr = descr;
        this.caract = caract;
        this.model = model;
        this.preci = preci;
        this.numSeri = numSeri;
    }

}