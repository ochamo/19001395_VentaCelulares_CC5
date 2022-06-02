export class UpdateNitRequest {
    public nitName: string;
    public nitN: string;
    public nitId: number;

    constructor(
        nitName: string = '',
        nitN: string = '',
        nitId: number = 0
    ) {
        this.nitId = nitId;
        this.nitN = nitN;
        this.nitName = nitName;
    }
}