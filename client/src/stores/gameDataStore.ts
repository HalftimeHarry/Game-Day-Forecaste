import { writable } from 'svelte/store';

// Define the initial state of the store
const initialState = [];

// Create the store
const gameDataStore = writable<UpcomingGameInput[]>([]);

export default gameDataStore;
