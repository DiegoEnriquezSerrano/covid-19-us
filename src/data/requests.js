import axios from 'axios';
import parsers from './parsers';

async function usStats () {
  let response = await axios.get(
    'https://covidtracking.com/api/v1/us/current.json'
    );
  return parsers.usStats(response.data);
}

async function stateStatsApiCall(state) {
  let response = await axios.get(
    'https://covidtracking.com/api/v1/states/current.json'
  );
  return parsers.stateStats(state,response.data);
}

async function historicUs() {
  let response = await axios.get(
    'https://covidtracking.com/api/us/daily'
  );
  return parsers.historicUs(response.data);
}

export default {
  usStats,
  stateStatsApiCall,
  historicUs,
};