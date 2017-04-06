import moment from 'moment';

const SCORE_URL = 'https://statsapi.web.nhl.com/api/v1/schedule';

export const getScores = () =>
  fetch(SCORE_URL + '?startDate=' + moment().format('YYYY-MM-DD'))
    .then(resp => resp.json());
