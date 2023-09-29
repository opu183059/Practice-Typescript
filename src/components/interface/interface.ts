export interface AppState {
    title: string;
    desccription: string
}

export interface AppAction {
    title: "title";
    payload: string
}

// for counter slice 
export interface CounterState {
    value: number;
}

// for add person slice 
export interface personData {
    id: number;
    userName: string;
    city: string
    number: number;
}

// for todo slice
export interface todoObject {
    id: number;
    task: String;
}

// message interface 
export interface message {
    id: number;
    name: string;
    message: string;
}