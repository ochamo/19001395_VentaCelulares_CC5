export class CreateNitRequest {
    public nitName: string;
    public nitN: string;

    constructor(
        nitName: string = '',
        nitN: string = ''
    ) {
        this.nitN = nitN;
        this.nitName = nitName;
    }
    
}