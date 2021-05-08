const expansions = require('../../../expansions');

module.exports = {
  id: 'win-with-mm',
  check: ({
    player,
    game,
    summary,
    events,
  }) => game.winner === player && game.winner_deck_expansion === expansions.mm
};
