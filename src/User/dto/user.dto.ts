export class CreateUserDTO {
    readonly _id:Number;
    readonly name: string;
    readonly password: string;
    readonly tags: string;
    readonly record: string;
    readonly tagType:object[]
}