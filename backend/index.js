const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');

const app = express();

let csvData = []; // Define the csvData variable

// Import teams data only if csvData is empty
if (csvData.length === 0) {
  fs.createReadStream('/workspace/Game-Day-Forecaste/backend/import/teams.csv')
    .pipe(csv())
    .on('data', (data) => {
      csvData.push(data);
    })
    .on('end', () => {
      console.log('CSV import completed');
    });
}

// Update the app.get route for teams
app.get('/api/teams', (req, res) => {
  // Check if csvData is defined and not empty
  if (csvData && csvData.length > 0) {
    const teamsData = csvData.map((data) => data['Tm']);
    res.json(teamsData);
  } else {
    res.json({ message: 'No data available' });
  }
});

// Add a new app.get route for odds
app.get('/api/odds', (req, res) => {
  // Check if csvData is defined and not empty
  if (csvData && csvData.length > 0) {
    const oddsData = csvData.map((data) => {
      return {
        season: data['Season'],
        week: data['Week'],
        date: data['Date'],
        homeTeam: data['Home Team'],
        homeScore: data['Home Score'],
        homeSpread: data['Home Closing Spread'],
        homeML: data['Home Closing ML'],
        awayTeam: data['Away Team'],
        awayScore: data['Away Score'],
        awaySpread: data['Away Closing Spread'],
        awayML: data['Away Closing ML'],
        total: data['Closing O/U Total']
      };
    });
    res.json(oddsData);
  } else {
    res.json({ message: 'No data available' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
