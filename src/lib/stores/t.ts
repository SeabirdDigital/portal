import { writable } from 'svelte/store';

const t = writable<{ [key: string]: string }>({});

export default t;
