import { UserSerialization } from "../../../users/models/interfaces/user-serialization";

export interface PostView {

    title: string,
    body: string,
    posted_by: UserSerialization

}
