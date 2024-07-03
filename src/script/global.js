import { writable, derived } from 'svelte/store';

export const count = writable(0);
export const mcount = derived(count, v=>v*10)