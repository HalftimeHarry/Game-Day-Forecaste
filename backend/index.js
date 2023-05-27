const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());

let csvData = []; // Define the csvData variable

// Import teams data only if csvData is empty
if (csvData.length === 0) {
  fs.createReadStream('/workspace/Game-Day-Forecaste/backend/import/teams.csv')
    .pipe(csv())
    .on('data', (data) => {
      // Update the data structure to include the new fields
      const teamData = {
        team: data['Tm'],
        wins: data['W'],
        losses: data['L'],
        ties: data['T'],
        winPercentage: data['W-L%'],
        pointsFor: data['PF'],
        pointsAgainst: data['PA'],
        pointDifferential: data['PD'],
        marginOfVictory: data['MoV'],
        strengthOfSchedule: data['SoS'],
        simpleRatingSystem: data['SRS'],
        offensiveSRS: data['OSRS'],
        defensiveSRS: data['DSRS'],
        // Add other fields as needed
      };
      csvData.push(teamData);
    })
    .on('end', () => {
      console.log('CSV import completed');
    });
}

// Update the /api/teams route to include the new fields
app.get('/api/teams', (req, res) => {
  // Check if csvData is defined and not empty
  if (csvData && csvData.length > 0) {
    const teamsData = csvData.map((data) => {
      return {
        team: data.team,
        wins: data.wins,
        losses: data.losses,
        ties: data.ties,
        winPercentage: data.winPercentage,
        pointsFor: data.pointsFor,
        pointsAgainst: data.pointsAgainst,
        pointDifferential: data.pointDifferential,
        marginOfVictory: data.marginOfVictory,
        strengthOfSchedule: data.strengthOfSchedule,
        simpleRatingSystem: data.simpleRatingSystem,
        offensiveSRS: data.offensiveSRS,
        defensiveSRS: data.defensiveSRS,
        // Include other fields you want to send
      };
    });
    res.json(teamsData);
  } else {
    res.json({ message: 'No data available' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
