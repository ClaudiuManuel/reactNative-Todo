export type actionType = {
    type: string,
    payload?: {
        text: string,
        description: string,
        key: string
    },
    key?: string
}