const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
const csvDataOdds = []; // Array for odds data
const csvDataTeams = []; // Array for teams data

// Import odds data only if csvDataOdds is empty
if (csvDataOdds.length === 0) {
  fs.createReadStream('/workspace/Game-Day-Forecaste/backend/import/odds_1.csv')
    .pipe(csv())
    .on('data', (data) => {
      csvDataOdds.push(data);
    })
    .on('end', () => {
      console.log('Odds CSV import completed');
    });
}

// Import teams data only if csvDataTeams is empty
if (csvDataTeams.length === 0) {
  fs.createReadStream('/workspace/Game-Day-Forecaste/backend/import/teams.csv')
    .pipe(csv())
    .on('data', (data) => {
      csvDataTeams.push(data);
    })
    .on('end', () => {
      console.log('Teams CSV import completed');
    });
}

// Update the /api/teams route to include the new fields
app.get('/api/teams', (req, res) => {
  // Check if csvDataTeams is defined and not empty
  if (csvDataTeams && csvDataTeams.length > 0) {
    const teamsData = csvDataTeams.map((data) => {
      return {
        team: data.Tm,
        wins: parseInt(data.W),
        losses: parseInt(data.L),
        ties: parseInt(data.T),
        winPercentage: parseFloat(data['W-L%']),
        pointsFor: parseInt(data.PF),
        pointsAgainst: parseInt(data.PA),
        pointDifferential: parseInt(data.PD),
        marginOfVictory: parseFloat(data.MoV),
        strengthOfSchedule: parseFloat(data.SoS),
        simpleRatingSystem: parseFloat(data.SRS),
        offensiveSRS: parseFloat(data.OSRS),
        defensiveSRS: parseFloat(data.DSRS),
      };
    });
    res.json(teamsData);
  } else {
    res.json({ message: 'No teams data available' });
  }
});

// Update the /api/odds route to include the new fields
app.get('/api/odds', (req, res) => {
  // Check if csvDataOdds is defined and not empty
  if (csvDataOdds && csvDataOdds.length > 0) {
    const oddsData = csvDataOdds.map((data) => {
      return {
        season: data.Season,
        week: data.Week,
        date: data.Date,
        homeTeam: data['Home Team'],
        homeScore: parseInt(data['Home Score']),
        homeSpread: parseFloat(data['Home Closing Spread']),
        homeML: parseFloat(data['Home Closing ML']),
        awayTeam: data['Away Team'],
        awayScore: parseInt(data['Away Score']),
        awaySpread: parseFloat(data['Away Closing Spread']),
        awayML: parseFloat(data['Away Closing ML']),
        total: parseFloat(data['Closing O/U Total'])
      };
    });
    res.json(oddsData);
  } else {
    res.json({ message: 'No odds data available' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
