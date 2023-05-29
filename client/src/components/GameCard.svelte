<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import type { Game } from '../app';
	import {
		deleteGame,
		toggleFavorite
	} from '/workspace/Game-Day-Forecaste/client/src/stores/GameStore';

	export let game: Game = {
		date: '',
		homeTeam: '',
		awayTeam: '',
		spread: 0,
		total: 0,
		moneyLine: 0,
		code: "",
		favorite: true
	};

	export let index: number;
</script>

<div class="card">
	<header class="card-header">
		{game.homeTeam}
		<div class="float-right">
			<button
				type="button"
				class="btn btn-sm variant-filled-secondary"
				on:click={() => toggleFavorite(index)}
			>
				{game.favorite ? 'Unfavorite' : 'Favorite'}
			</button>
			<button
				type="button"
				class="btn btn-sm variant-filled-error"
				on:click={() => deleteGame(index)}
			>
				X
			</button>
		</div>
	</header>
	<section class="p-4">
		<CodeBlock language={game.homeTeam} code={game.code} />
	</section>
</div>
