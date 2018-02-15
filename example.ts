import { ObjectType, Field, Schema } from "graphene-js";

@ObjectType()
class Query {
    @Field(String)
    hello() {
        return "World";
    }
}

const schema = new Schema({query: Query});

schema.execute(`{ hello }`).then(console.log);
