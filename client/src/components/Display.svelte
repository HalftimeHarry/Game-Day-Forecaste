<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { writable, get } from 'svelte/store';

	let gameData: UpcomingGameInput = {
		date: '',
		homeTeam: '',
		awayTeam: '',
		spread: 0,
		total: 0,
		moneyLine: 0,
		pregame: true
	};

	const dispatch = createEventDispatcher();

	// Create a writable store to hold the gameData objects
	const gameDataStore = writable([]);

	// Function to add gameData to the store
	function addGameDataToStore(gameData) {
		gameDataStore.update((data) => {
			let newData = [...data, gameData];
			return newData;
		});
	}

	function handleSubmit() {
		addGameDataToStore(gameData);
		// Log the current state of gameDataStore
		console.log('Current state of gameDataStore: ', get(gameDataStore));
		// Reset the form data after submitting
		gameData = {
			date: '',
			homeTeam: '',
			awayTeam: '',
			spread: 0,
			total: 0,
			moneyLine: 0,
			pregame: true
		};
	}
</script>

<!-- Your form HTML remains the same -->

<button type="submit" class="btn btn-primary" on:click={handleSubmit}>Submit</button>

{gameData.homeTeam}
