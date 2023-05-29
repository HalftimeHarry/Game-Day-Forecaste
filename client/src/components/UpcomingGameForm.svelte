<script lang="ts">
	import GameCard from '/workspace/Game-Day-Forecaste/client/src/components/GameCard.svelte';
	import { gameStore, addGame } from '/workspace/Game-Day-Forecaste/client/src/stores/GameStore';
	import type { PageData } from './$types';
	import type { UpcomingGameInput } from '../app';
	export let data: PageData = { games: [] };

	let gameData: UpcomingGameInput = {
		date: '',
		homeTeam: '',
		awayTeam: '',
		spread: 0,
		total: 0,
		moneyLine: 0
	};

	// createSnippet(input : CodeSnippetInput)
	if (data && data.games) {
		gameStore.set(data.games);
	}
	// SnippetStore -> a local writable that allows us to store code snippets
	// create / delete snippets
	// favorite snippets
	// +page.ts to initially load in some example snippets (mocking a database request)
</script>

<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h3 class="text-center py-6">Create A Game</h3>
		<div class="card p-4 w-full text-token space-y-4">
			<label class="label">
				<span>Date</span>
				<input
					class="input"
					type="text"
					placeholder="Enter date here..."
					bind:value={gameData.date}
				/>
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
			<button
				type="button"
				class="btn btn-sm variant-filled-primary"
				on:click={() => addGame(gameData)}
			>
				Create Game
			</button>
		</div>
		<div class="text-center py-6">
			<h2>My Games</h2>
		</div>
		{#each $gameStore as game, index}
			<GameCard {game} {index} /> <!--WE NEED PROPERTIES-->
		{/each}
	</div>
</div>
