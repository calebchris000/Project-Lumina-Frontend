import { writable } from "svelte/store";


let initialState = {
    darkMode: false
}
const store = writable(initialState)