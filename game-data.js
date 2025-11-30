// game-data.js - Közös adattároló a játékosok eredményeihez
const gameData = {
  players: {
    balazs: { name: 'Balázs', progress: 0 },
    gyula: { name: 'Gyula', progress: 0 },
    dani: { name: 'Dani', progress: 0 },
    istvan: { name: 'István', progress: 0 }
  },
  
  // Progress frissítése
  updateProgress: function(player, progress) {
    if (this.players[player]) {
      this.players[player].progress = progress;
      this.saveToStorage();
    }
  },
  
  // Adatok mentése localStorage-ba
  saveToStorage: function() {
    localStorage.setItem('gameLeaderboard', JSON.stringify(this.players));
  },
  
  // Adatok betöltése localStorage-ból
  loadFromStorage: function() {
    const saved = localStorage.getItem('gameLeaderboard');
    if (saved) {
      this.players = JSON.parse(saved);
    }
  },
  
  // Ranglista lekérése
  getLeaderboard: function() {
    return Object.values(this.players).sort((a, b) => b.progress - a.progress);
  }
};

// Betöltjük a mentett adatokat
gameData.loadFromStorage();
