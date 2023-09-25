export interface AppState {
    title: string;
    desccription: string
}

export interface AppAction {
    title: "title";
    payload: string
}

export interface FormData {
    id: number | string;
    userName: string;
    message: string;
}