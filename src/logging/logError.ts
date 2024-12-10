const logError = (e: unknown) => {
    if (typeof e === "string") {
        console.error(e)
    } else if (e instanceof Error) {
        console.error(e.message)
    }
}

export default logError