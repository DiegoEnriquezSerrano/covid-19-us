import format from './format';
import moment from 'moment';
import stateNames from './stateNames';

function usStats(data) {
  const [usStatRaw] = data;
  return parseStats(usStatRaw);
}

function stateStats(state,data) {
  const stateStatRaw = data.find(d => d.state === state);
  return parseStats(stateStatRaw);
}

function historicUs(historicData) {
  return parseHistoric(historicData);
}

function historicState(state,historicData) {
  const stateHistoric = historicData.filter(
    d => d.state === state
  );
  return parseHistoric(stateHistoric);
}

function parseHistoric(historicData) {
  return [
    {
      label: 'Cases',
      key: 'positive',
      color: 'rgb(100,0,200)'
    },
    {
      label: 'Recovered',
      key: 'recovered',
      color: 'rgb(100,100,200)'
    },
    {
      label: 'Total tested',
      key: 'totalTestResults',
      color: 'rgb(10,30,100)'
    },
    {
      label: 'Hospitalized',
      key: 'hospitalizedCurrently',
      color: 'rgb(20,100,230)'
    },
    {
      label: 'Deaths',
      key: 'death',
      color: 'rgb(255,99,132)'
    }
  ].reduce((prev,next) => {
    if (historicData.filter(d => d[next.key]).length > 4) {
      prev.push(parseChart(historicData, next.key, next.label, next.color))
    }
    return prev;
  }, []);
}

function parseChart(historicData, key, label, color) {
  const chartData = historicData.map(data => {
    return {
      x: moment(data.date, 'YYYYMMDD'),
      y: data[key] || 0
    }
  });
  return {
    label,
    data: chartData,
    fill: false,
    borderColor: color
  };
};

function statesTable(rawStats) {
  return rawStats.map((d) => {
    let fullStateName = stateNames.find((n) => n.abbreviation === d.state).name;
    return {
      deaths: d.death.toLocaleString(),
      cases: d.positive.toLocaleString(),
      tested: d.totalTestResults.toLocaleString(),
      state: d.state,
      fullStateName
    };
  });
};

function parseStats(rawStats){
  return {
    cases:        format.number(rawStats.positive),
    deaths:       format.number(rawStats.death),
    recovered:    format.number(rawStats.recovered),
    ventilator:   format.number(rawStats.onVentilatorCurrently),
    hospitalized: format.number(rawStats.hospitalized),
    icu:          format.number(rawStats.inIcuCurrently),
    tested:       format.number(rawStats.totalTestResults),
    updated:      moment(rawStats.lastModified).format('LLLL')
  };
};

export default {
  usStats,
  stateStats,
  historicUs,
  historicState,
  statesTable,
};