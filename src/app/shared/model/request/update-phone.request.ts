export class UpdatePhoneRequest {
    img: string;
    descr: string;
    caract: string;
    model: string;
    preci: number;
    numSeri: string;
    celId: number;

    constructor(
        celId: number = 0,
        img: string = '',
        descr: string = '',
        caract: string = '',
        model: string = '',
        preci: number = 0,
        numSeri: string = ''
    ) {
        this.celId = celId;
        this.img = img;
        this.descr = descr;
        this.caract = caract;
        this.model = model;
        this.preci = preci;
        this.numSeri = numSeri;
    }

}