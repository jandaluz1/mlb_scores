import React, { Component } from 'react';
import './Scoreboard.scss';

const game = {
  links: {
    away_audio:
      "bam.media.launchPlayer({calendar_event_id:'14-567266-2019-04-08',media_type:'audio'})",
    away_preview:
      '/mlb/gameday/index.jsp?gid=2019_04_08_tbamlb_chamlb_1&mode=preview&c_id=mlb',
    home_audio:
      "bam.media.launchPlayer({calendar_event_id:'14-567266-2019-04-08',media_type:'audio'})",
    home_preview:
      '/mlb/gameday/index.jsp?gid=2019_04_08_tbamlb_chamlb_1&mode=preview&c_id=mlb',
    mlbtv:
      "bam.media.launchPlayer({calendar_event_id:'14-567266-2019-04-08',media_type:'video'})",
    preview:
      '/mlb/gameday/index.jsp?gid=2019_04_08_tbamlb_chamlb_1&mode=preview&c_id=mlb',
    tv_station: 'WGN',
    wrapup:
      '/mlb/gameday/index.jsp?gid=2019_04_08_tbamlb_chamlb_1&mode=wrap&c_id=mlb'
  },
  broadcast: {
    home: {
      tv: 'WGN',
      radio: 'WGN 720, WRTO 1200'
    },
    away: {
      tv: 'Fox Sports Sun',
      radio: 'WDAE 620 AM /95.3 FM'
    }
  },
  status: {
    b: '3',
    ind: 'I',
    inning: '8',
    inning_state: 'Top',
    is_no_hitter: 'N',
    is_perfect_game: 'N',
    note: '',
    o: '2',
    reason: '',
    s: '1',
    status: 'In Progress',
    top_inning: 'Y'
  },
  home_runs: {
    player: {
      first: 'Jose',
      hr: '1',
      id: '602922',
      inning: '5',
      last: 'Rondon',
      name_display_roster: 'Rondon',
      number: '20',
      runners: '0',
      std_hr: '1',
      team_code: 'cha'
    }
  },
  linescore: {
    inning: [
      {
        away: '2',
        home: '0'
      },
      {
        away: '2',
        home: '0'
      },
      {
        away: '0',
        home: '0'
      },
      {
        away: '0',
        home: '0'
      },
      {
        away: '0',
        home: '1'
      },
      {
        away: '0',
        home: '0'
      },
      {
        away: '0',
        home: '0'
      },
      {
        away: '',
        home: ''
      }
    ],
    r: {
      away: '4',
      diff: '3',
      home: '1'
    },
    h: {
      away: '11',
      home: '7'
    },
    e: {
      away: '0',
      home: '0'
    },
    hr: {
      away: '0',
      home: '1'
    },
    sb: {
      away: '0',
      home: '0'
    },
    so: {
      away: '0',
      home: '0'
    }
  },
  review: {
    challenges_away_remaining: '1',
    challenges_away_used: '0',
    challenges_home_remaining: '1',
    challenges_home_used: '0'
  },
  batter: {
    ab: '0',
    avg: '.235',
    first: 'Austin',
    h: '0',
    hr: '2',
    id: '640457',
    last: 'Meadows',
    name_display_roster: 'Meadows',
    number: '17',
    obp: '.297',
    ops: '.738',
    pos: 'PH',
    rbi: '5',
    slg: '.441'
  },
  ondeck: {
    ab: '3',
    avg: '.333',
    first: 'Ji-Man',
    h: '0',
    hr: '0',
    id: '596847',
    last: 'Choi',
    name_display_roster: 'Choi',
    number: '26',
    obp: '.382',
    ops: '.782',
    pos: '1B',
    rbi: '5',
    slg: '.400'
  },
  inhole: {
    ab: '2',
    avg: '.071',
    first: 'Mike',
    h: '0',
    hr: '0',
    id: '572287',
    last: 'Zunino',
    name_display_roster: 'Zunino',
    number: '10',
    obp: '.133',
    ops: '.204',
    pos: 'C',
    rbi: '1',
    slg: '.071'
  },
  due_up_batter: {
    ab: '',
    avg: '',
    first: '',
    h: '',
    hr: '',
    id: '547989',
    last: '',
    name_display_roster: '',
    number: '',
    obp: '',
    ops: '',
    pos: '',
    rbi: '',
    slg: ''
  },
  due_up_ondeck: {
    ab: '',
    avg: '',
    first: '',
    h: '',
    hr: '',
    id: '602922',
    last: '',
    name_display_roster: '',
    number: '',
    obp: '',
    ops: '',
    pos: '',
    rbi: '',
    slg: ''
  },
  due_up_inhole: {
    ab: '',
    avg: '',
    first: '',
    h: '',
    hr: '',
    id: '660162',
    last: '',
    name_display_roster: '',
    number: '',
    obp: '',
    ops: '',
    pos: '',
    rbi: '',
    slg: ''
  },
  pitcher: {
    er: '0',
    era: '0.00',
    first: 'Carson',
    id: '608334',
    ip: '3.0',
    last: 'Fulmer',
    losses: '0',
    name_display_roster: 'Fulmer',
    number: '51',
    wins: '0'
  },
  opposing_pitcher: {
    era: '0.00',
    first: 'Hunter',
    id: '621056',
    last: 'Wood',
    losses: '0',
    name_display_roster: 'Wood',
    number: '44',
    wins: '0'
  },
  pbp: {
    last: 'Avisail Garcia strikes out swinging.  '
  },
  runners_on_base: {
    runner_on_1b: {
      first: 'Daniel',
      id: '621002',
      last: 'Robertson',
      name_display_roster: 'Robertson',
      number: '28'
    },
    runner_on_2b: {
      first: 'Yandy',
      id: '650490',
      last: 'Diaz',
      name_display_roster: 'Diaz',
      number: '2'
    },
    runner_on_3b: {
      first: 'Willy',
      id: '642715',
      last: 'Adames',
      name_display_roster: 'Adames',
      number: '1'
    },
    status: '7'
  },
  video_thumbnail:
    'http://mediadownloads.mlb.com/mlbam/preview/tbacha_567266_th_7_preview.jpg',
  video_thumbnails: {
    thumbnail: [
      {
        height: '70',
        scenario: '7',
        width: '124',
        text:
          'http://mediadownloads.mlb.com/mlbam/preview/tbacha_567266_th_7_preview.jpg'
      },
      {
        height: '90',
        scenario: '37',
        width: '160',
        text:
          'http://mediadownloads.mlb.com/mlbam/preview/tbacha_567266_th_37_preview.jpg'
      }
    ]
  },
  game_media: {
    media: [
      {
        calendar_event_id: '14-567266-2019-04-08',
        enhanced: 'N',
        free: 'YES',
        has_milbtv: 'false',
        has_mlbtv: 'true',
        media_state: 'media_dead',
        start: '2019-04-08T18:10:00Z',
        thumbnail:
          'http://mediadownloads.mlb.com/mlbam/preview/tbacha_567266_th_7_preview.jpg',
        title: 'TB @ CWS',
        type: 'game'
      },
      {
        content_id: '',
        headline: "Rondon's solo homer to left field",
        thumbnail: '',
        topic_id: '',
        type: 'vpp'
      }
    ]
  },
  ampm: 'PM',
  aw_lg_ampm: 'PM',
  away_ampm: 'PM',
  away_code: 'tba',
  away_division: 'E',
  away_file_code: 'tb',
  away_games_back: '',
  away_games_back_wildcard: '',
  away_league_id: '103',
  away_loss: '3',
  away_name_abbrev: 'TB',
  away_sport_code: 'mlb',
  away_team_city: 'Tampa Bay',
  away_team_id: '139',
  away_team_name: 'Rays',
  away_time: '2:10',
  away_time_zone: 'ET',
  away_win: '7',
  day: 'MON',
  description: '',
  double_header_sw: 'N',
  first_pitch_et: '',
  game_data_directory:
    '/components/game/mlb/year_2019/month_04/day_08/gid_2019_04_08_tbamlb_chamlb_1',
  game_nbr: '1',
  game_pk: '567266',
  game_type: 'R',
  gameday: '2019_04_08_tbamlb_chamlb_1',
  gameday_sw: 'P',
  hm_lg_ampm: 'PM',
  home_ampm: 'PM',
  home_code: 'cha',
  home_division: 'C',
  home_file_code: 'cws',
  home_games_back: '',
  home_games_back_wildcard: '',
  home_league_id: '103',
  home_loss: '5',
  home_name_abbrev: 'CWS',
  home_sport_code: 'mlb',
  home_team_city: 'Chi White Sox',
  home_team_id: '145',
  home_team_name: 'White Sox',
  home_time: '1:10',
  home_time_zone: 'CT',
  home_win: '3',
  id: '2019/04/08/tbamlb-chamlb-1',
  inning_break_length: '',
  league: 'AA',
  location: 'Chicago, IL',
  original_date: '2019/04/08',
  resume_date: '',
  scheduled_innings: '9',
  ser_games: '3',
  ser_home_nbr: '4',
  series: 'Regular Season',
  series_num: '4',
  stats_season: '2019',
  tbd_flag: 'N',
  tiebreaker_sw: 'N',
  time: '2:10',
  time_aw_lg: '2:10',
  time_date: '2019/04/08 2:10',
  time_date_aw_lg: '2019/04/08 2:10',
  time_date_hm_lg: '2019/04/08 2:10',
  time_hm_lg: '2:10',
  time_zone: 'ET',
  time_zone_aw_lg: '-4',
  time_zone_hm_lg: '-4',
  tz_aw_lg_gen: 'ET',
  tz_hm_lg_gen: 'ET',
  venue: 'Guaranteed Rate Field',
  venue_id: '4',
  venue_w_chan_loc: 'USIL0225'
};

class Scoreboard extends Component {
  firstBase = React.createRef();
  secondBase = React.createRef();
  thirdBase = React.createRef();

  resetBases = () => {
    this.firstBase.current.classList.remove('on-base');
    this.secondBase.current.classList.remove('on-base');
    this.thirdBase.current.classList.remove('on-base');
  };

  updateBases = runners => {
    this.resetBases();
    //need to find out the status for runners on base
    //these cases are just a guess
    switch (runners.status) {
      case '1':
        this.firstBase.current.classList.add('on-base');
        break;
      case '2':
        this.secondBase.current.classList.add('on-base');
        break;
      case '3':
        this.thirdBase.current.classList.add('on-base');
        break;
      case '4':
        this.firstBase.current.classList.add('on-base');
        this.secondBase.current.classList.add('on-base');
        break;
      case '5':
        this.secondBase.current.classList.add('on-base');
        this.thirdBase.current.classList.add('on-base');
        break;
      case '6':
        this.firstBase.current.classList.add('on-base');
        this.thirdBase.current.classList.add('on-base');
        break;
      case '7':
        this.firstBase.current.classList.add('on-base');
        this.secondBase.current.classList.add('on-base');
        this.thirdBase.current.classList.add('on-base');
        break;
      default:
        break;
    }
  };

  componentDidMount() {
    // console.log(this.firstBase.current.classList);
    const { runners_on_base } = game;
    this.updateBases(runners_on_base);
  }
  render() {
    return (
      <div id="scoreboard">
        <div id="teams">
          <div className="team" id="away">
            {game.away_name_abbrev}
          </div>
          <div className="team" id="away-score">
            {game.linescore.r.away}
          </div>
          <div className="team" id="home">
            {game.home_name_abbrev}
          </div>
          <div className="team" id="home-score">
            {game.linescore.r.home}
          </div>
        </div>
        <div id="field-box">
          <div id="field">
            <div className="base" id="first-base" ref={this.firstBase} />
            <div className="base" id="second-base" ref={this.secondBase} />
            <div className="base" id="third-base" ref={this.thirdBase} />
          </div>
        </div>
        <div id="info">
          {game.status.top_inning === 'Y' ? 'Top' : 'Bot'} {game.status.inning}
        </div>
        <div id="outs">{game.status.o} out</div>
      </div>
    );
  }
}

export default Scoreboard;
