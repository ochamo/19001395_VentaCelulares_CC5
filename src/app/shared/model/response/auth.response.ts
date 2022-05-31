export class AuthResponse {
    jwt: string;
    xyz: number;
    yyz: number;

    constructor(jwt: string, xyz: number, yyz: number) {
        this.jwt = jwt;
        this.xyz = xyz;
        this.yyz = yyz;
    }

}