export class CreateAddressRequest {
    public muni: number;
    public zon: number;
    public ave: string;
    public cal: string;
    public dirNom: string;

    constructor(
        muni: number = 0,
        zon: number = 0,
        ave: string = '',
        dirNom: string = '',
        cal: string = ''
    ) {
        this.muni = muni;
        this.dirNom = dirNom;
        this.zon = zon;
        this.ave = ave;
        this.cal = cal;
    }

}