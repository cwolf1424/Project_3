
d3.json('http://127.0.0.1:8000/api/v1.0/leagues').then(function(data) {
    let leagueDropDown = d3.select('#selLeague')

    data.forEach (l => {
        leagueDropDown.append('option').text(l['league']).property('value', l['league_id'])
        
    });

    leagueDropDown.property('selectedIndex', -1)
});

d3.json('http://127.0.0.1:8000/api/v1.0/positions').then(function(data) {
    let positionDropDown = d3.select('#selPosition')

    data.forEach(p => {
        positionDropDown.append('option').text(p['position']).property('value', p['position_id'])
    });

    positionDropDown.property('selectedIndex', -1)
});

function selLeagueChange(leagueId) {
    d3.json(`http://127.0.0.1:8000/api/v1.0/leagues/${leagueId}/teams`).then(function(data) {
        let teamDropDown = d3.select('#selTeam')
        teamDropDown.selectAll('*').remove();
        
        data.forEach(t => {
            teamDropDown.append('option').text(t['team']).property('value', t['team_id'])
        });

        teamDropDown.property('selectedIndex', -1)
    });

    
};

function selTeamChange() {
    selectPlayerStats();
};

function selPositionChange() {
    selectPlayerStats();
};


function selectPlayerStats() {
    let leagueDropDown = d3.select('#selLeague')
    let teamDropDown = d3.select('#selTeam')
    let positionDropDown = d3.select('#selPosition')

    if (leagueDropDown.property('selectedIndex') > -1 && teamDropDown.property('selectedIndex') > -1 && positionDropDown.property('selectedIndex') > -1) {
        let leagueId = leagueDropDown.property('value')
        let teamId = teamDropDown.property('value')
        let positionId = positionDropDown.property('value')
        d3.json(`http://127.0.0.1:8000/api/v1.0/player_stats/${leagueId}/${teamId}/${positionId}`).then(function(data) {
            let foundPlayers = d3.select('#foundPlayers');
            foundPlayers.selectAll('li').remove();

            data.forEach(p => {
                foundPlayers.append('li').text(p['player_name']).on('click', function() {
                    selectPlayerData(p['player_id']);
                });
            });

        });
    };
};

function selectPlayerData(playerId) {
    d3.json(`http://127.0.0.1:8000/api/v1.0/player_data/${playerId}`).then(function(data) {
        let playerImg = d3.select('#playerPhoto')
        playerImg.property('src', data[0]['photo_url']);

        d3.select('#playerBirthdate').text(data[0]['birthdate']);
        d3.select('#playerHeight').text(data[0]['height']);
        d3.select('#playerNumber').text(data[0]['jersey_number']);
        d3.select('#playerNationality').text(data[0]['nationality']);
        d3.select('#playerWeight').text(data[0]['weight']);
    });
};