<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';

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
			console.log('Before update: ', data);
			let newData = [...data, gameData];
			console.log('After update: ', newData);
			return newData;
		});
	}

	function handleSubmit() {
		addGameDataToStore(gameData);
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

<h3 class="text-center py-6">Add Upcoming Game</h3>
<div class="card p-4 w-full text-token space-y-4">
	<label class="label">
		<span>Date</span>
		<input class="input" type="text" placeholder="Enter date here..." bind:value={gameData.date} />
	</label>
	<label class="label">
		<span>Home Team</span>
		<input
			class="input"
			type="text"
			placeholder="Enter home team here..."
			bind:value={gameData.homeTeam}
		/>
	</label>
	<label class="label">
		<span>Away Team</span>
		<input
			class="input"
			type="text"
			placeholder="Enter away team here..."
			bind:value={gameData.awayTeam}
		/>
	</label>
	<label class="label">
		<span>Spread</span>
		<input
			class="input"
			type="number"
			placeholder="Enter spread here..."
			bind:value={gameData.spread}
		/>
	</label>
	<label class="label">
		<span>Total</span>
		<input
			class="input"
			type="number"
			placeholder="Enter total here..."
			bind:value={gameData.total}
		/>
	</label>
	<label class="label">
		<span>Money Line</span>
		<input
			class="input"
			type="number"
			placeholder="Enter money line here..."
			bind:value={gameData.moneyLine}
		/>
	</label>

	<button type="submit" class="btn btn-primary" on:click={handleSubmit}>Submit</button>
</div>
