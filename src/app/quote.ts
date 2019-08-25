export class Quote {
    public showDescription:boolean;
    constructor(public title:string,public author:string, public quote:string,public user:string,public completeDate:Date ,public upvote:number,public downvote:number){
        this.showDescription=false;

    }
}
