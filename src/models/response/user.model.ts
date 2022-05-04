export class User {
    public id: string;
    public name: string;
    public avatar: string;
    public createdAt: string;

    constructor();
    constructor(obj?: User);
    constructor(obj?: any){
        this.id = obj?.id || "";
        this.name = obj?.name || "";
        this.avatar = obj?.avatar || "";
        this.createdAt = obj?.createdAt || "";
    }
}