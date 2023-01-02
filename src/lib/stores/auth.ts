import type { Auth } from "firebase/auth"

import { writable } from "svelte/store";

export const auth = writable<Auth>(undefined);