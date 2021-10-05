export class User {
    public id: string;
    public email: string;
    public username: string;
    public fullname: string;

    constructor();
    constructor(obj?: User);
    constructor(obj?: any){
        this.id = obj?.id || "";
        this.email = obj?.email || "";
        this.username = obj?.username || "";
        this.fullname = obj?.fullname || "";
    }
}