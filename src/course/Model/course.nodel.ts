import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'
import  Mongoose,{HydratedDocument}  from "mongoose"


@Schema()
export class course{

}
export const CourseSchema = SchemaFactory.createForClass(course);

