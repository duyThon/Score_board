(() => {
  const getResetState = (is5vs5, scoreboardScale) => ({
    timer: 0,
    shotClock: is5vs5 ? 24 : 12,
    scoreAndFault: {
      teamAScore: 0,
      teamBScore: 0,
      teamAFaults: 0,
      teamBFaults: 0,
    },
    period: 1,
    overTime: false,
    possession: null,
    teamsTimeout: {
      teamATOUsed: 0,
      teamBTOUsed: 0,
    },
    totalTO: 2,
    timeOutClock: 59,
    isTeamATimingOut: false,
    isTeamBTimingOut: false,
    is5vs5,
    scoreboardScale,
  });

  window.ScoreboardReset = Object.freeze({ getResetState });
})();
