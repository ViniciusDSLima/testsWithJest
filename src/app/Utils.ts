import retryTimes = jest.retryTimes;

export function toUpperCase(arg: string) {
    return arg.toUpperCase()
}

export type stringinfo = {
    lowerCase: string,
    upperCase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined,
}

export function getStringInfo(arg: string): stringinfo {
    return {
        lowerCase: arg.toLowerCase(),
        upperCase: arg.toUpperCase(),
        characters: Array.from(arg),
        length: arg.length,
        extraInfo: {}
    }
}