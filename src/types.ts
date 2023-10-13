export interface Subscription {
    [eventName: string]: ((data: any) => void)[];
}

// JSON-RPC interfaces
export interface JsonRpcRequestPayload {
    jsonrpc: string;
    method: string;
    params?: any[];
    id: string | number;
}

export interface JsonRpcResponsePayload {
    jsonrpc: string;
    id: string | number;
    result?: any;
    error?: {
        code: number;
        message: string;
        data?: any;
    };
}

export type AnyFunction = (...args: any[]) => any;

export type AnyAsyncFunction = (...args: any[]) => Promise<any>;

export interface GenericChannelMessage {
    eventName: string;
    data?: any;
    responseEventName?: string;
}
