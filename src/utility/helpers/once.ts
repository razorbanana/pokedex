function once<TFunction extends (...args: unknown[])=> unknown>(fn: TFunction): TFunction {
    let haveResult = false;
    let result: unknown = null;

    return (function (this: unknown, ...args: unknown[]) {
        if (!haveResult) {
            haveResult = true;
            result = fn.apply(this, args);
        }

        return result;
    }) as TFunction;
}

export default once