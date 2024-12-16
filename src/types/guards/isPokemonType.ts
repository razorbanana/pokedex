import { Type } from "../../modules/typesModule";

function isType(value: string): boolean {
    return Object.values(Type).includes(value as Type);
}

export default isType