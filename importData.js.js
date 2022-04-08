const mysql = require("mysql2");
// const connection = require("./utils/db");
require("dotenv").config();
const { readFile } = require("fs/promises");

(async () => {
  let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  try {
    let players = await readFile("./data/players.json");
    let rawData = JSON.parse(players);
    // console.log("rawData", rawData);

    rawData.map(async (item) => {
      // console.log("item", item);
      let name = item.name;
      let team_acronym = item.team_acronym;
      let team_name = item.team_name;
      let games_played = item.games_played;
      let minutes_per_game = item.minutes_per_game;
      let field_goals_attempted_per_game = item.field_goals_attempted_per_game;
      let field_goals_made_per_game = item.field_goals_made_per_game;
      let field_goal_percentage = item.field_goal_percentage;
      let free_throw_percentage = item.free_throw_percentage;
      let three_point_attempted_per_game = item.three_point_attempted_per_game;
      let three_point_made_per_game = item.three_point_made_per_game;
      let three_point_percentage = item.three_point_percentage;
      let points_per_game = item.points_per_game;
      let offensive_rebounds_per_game = item.offensive_rebounds_per_game;
      let defensive_rebounds_per_game = item.defensive_rebounds_per_game;
      let rebounds_per_game = item.rebounds_per_game;
      let assists_per_game = item.assists_per_game;
      let steals_per_game = item.steals_per_game;
      let blocks_per_game = item.blocks_per_game;
      let turnovers_per_game = item.turnovers_per_game;
      let player_efficiency_rating = item.player_efficiency_rating;
      let saveRawData = await connection.execute(
        "INSERT INTO players (name,team_acronym,team_name,games_played,minutes_per_game,field_goals_attempted_per_game,field_goals_made_per_game,field_goal_percentage,free_throw_percentage,three_point_attempted_per_game,three_point_made_per_game,three_point_percentage,points_per_game,offensive_rebounds_per_game,defensive_rebounds_per_game,rebounds_per_game,assists_per_game,steals_per_game,blocks_per_game,turnovers_per_game,player_efficiency_rating) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          name,
          team_acronym,
          team_name,
          games_played,
          minutes_per_game,
          field_goals_attempted_per_game,
          field_goals_made_per_game,
          field_goal_percentage,
          free_throw_percentage,
          three_point_attempted_per_game,
          three_point_made_per_game,
          three_point_percentage,
          points_per_game,
          offensive_rebounds_per_game,
          defensive_rebounds_per_game,
          rebounds_per_game,
          assists_per_game,
          steals_per_game,
          blocks_per_game,
          turnovers_per_game,
          player_efficiency_rating,
        ]
      );
    });
  } catch (e) {
    console.log(e);
  }
  connection.end();
})();
