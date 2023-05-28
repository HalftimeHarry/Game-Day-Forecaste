<script>
	import { onMount } from 'svelte';

	let oddsData = [];

	onMount(async () => {
		try {
			const response = await fetch(
				'https://3000-halftimehar-gamedayfore-ojzwxjrdeex.ws-us98.gitpod.io/api/odds'
			);
			const data = await response.json();
			oddsData = data;
		} catch (error) {
			console.error('Error fetching odds data:', error);
		}
	});
</script>

<table class="min-w-full divide-y divide-gray-200">
	<thead>
		<tr>
			<th
				class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider"
			>
				Season
			</th>
			<th
				class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider"
			>
				Week
			</th>
			<th
				class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider"
			>
				Date
			</th>
			<th
				class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider"
			>
				Home Team
			</th>
			<th
				class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider"
			>
				Home Score
			</th>
			<th
				class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider"
			>
				Home Spread
			</th>
			<th
				class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider"
			>
				Home ML
			</th>
			<th
				class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider"
			>
				Away Team
			</th>
			<th
				class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider"
			>
				Away Score
			</th>
			<th
				class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider"
			>
				Away Spread
			</th>
			<th
				class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider"
			>
				Away ML
			</th>
			<th
				class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider"
			>
				Total
			</th>
		</tr>
	</thead>
	<tbody>
		{#each oddsData as odds}
			<tr>
				<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-white">
					{odds.season}
				</td>
				<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-white">
					{odds.week}
				</td>
				<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-white">
					{odds.date}
				</td>
				<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-white">
					{odds.homeTeam}
				</td>
				<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-white">
					{odds.homeScore}
				</td>
				<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-white">
					{odds.homeSpread}
				</td>
				<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-white">
					{odds.homeML}
				</td>
				<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-white">
					{odds.awayTeam}
				</td>
				<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-white">
					{odds.awayScore}
				</td>
				<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-white">
					{odds.awaySpread}
				</td>
				<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-white">
					{odds.awayML}
				</td>
				<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-white">
					{odds.total}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
