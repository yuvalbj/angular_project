import { Post } from "./post";
import { Task } from "./task";

export class User {

    constructor(
                public _id? : string, 
                public userName?: string,
                public email?: string,
                public street? : string, 
                public city? : string,
                public zipcode? : number,
                public tasks? : [Task],
                public posts? : [Post]
                ){}
}
