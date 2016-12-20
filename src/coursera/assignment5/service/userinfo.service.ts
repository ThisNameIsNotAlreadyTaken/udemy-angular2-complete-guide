export class UserInfoService {
    private info : any;

    getInfo() {
        return this.info;
    }

    setInfo(info: any){
        this.info = info;
    }
}