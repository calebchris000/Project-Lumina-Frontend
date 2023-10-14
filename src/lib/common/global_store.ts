import { writable } from "svelte/store";


let sharedStore: {} = {
    isDarkMode :true
}

export const globalStore = writable(sharedStore)