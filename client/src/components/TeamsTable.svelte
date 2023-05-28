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
			<th>Strength of Schedule</th>
			<th>Margin of Victory</th>
			<th>Wins</th>
			<th>Losses</th>
			<th>Simple Rating System</th>
		</tr>
	</thead>
	<tbody>
		{#each teams as team}
			<tr>
				<td>{team.team}</td>
				<td>{team.strengthOfSchedule}</td>
				<td>{team.marginOfVictory}</td>
				<td>{team.wins}</td>
				<td>{team.losses}</td>
				<td>{team.simpleRatingSystem}</td>
			</tr>
		{/each}
	</tbody>
</table>
