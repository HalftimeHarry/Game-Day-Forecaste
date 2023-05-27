<script>
	let teams = [];

	async function fetchTeams() {
		try {
			const response = await fetch(
				'https://3000-halftimehar-gamedayfore-ojzwxjrdeex.ws-us98.gitpod.io/api/teams'
			);
			teams = await response.json();
			console.log(teams);
		} catch (error) {
			console.error(error);
		}
	}

	fetchTeams();
</script>

<table>
	<thead>
		<tr>
			<th>Team</th>
		</tr>
	</thead>
	<tbody>
		{#each teams as team}
			<tr>
				<td>{team.team}</td>
				<!-- Display the team name -->
			</tr>
		{/each}
	</tbody>
</table>
