export class LoginRequest {
    public userName: string;
    public pass: string;

    constructor(userName: string = '', pass: string = '') {
        this.userName = userName;
        this.pass = pass;
    }

}