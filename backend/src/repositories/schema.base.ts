import { Prop } from "@nestjs/mongoose";

export class SchemaBase {

    @Prop()
    createdTime?: Date;
    
    @Prop()
    modifiedTime?: Date;    
}