import { UserSerialization } from "../../../users/models/interfaces/user-serialization";

export interface PostView {

    title: string,
    body: string,
    user: UserSerialization

}
