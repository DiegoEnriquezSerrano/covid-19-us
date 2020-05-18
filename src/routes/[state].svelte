<script context="module">

  import stateNames from '../data/stateNames.js';
  import requests from '../data/requests.js';

  export async function preload(page) {
    const state = page.params['state'].toUpperCase();
    if (stateNames.find(s => s.abbreviation === state) === undefined) {
      this.error(404, "state not found");
      return;
    };

    const fullStateName = stateNames.find(s => s.abbreviation === state).name;

    try {
      const stateStats = await requests.stateStatsApiCall(state);
      const historic = await requests.historicState(state)
      return {state: fullStateName, stateStats, historic};
    } catch(e) {
      console.log(e);
      return;
    };
  };

</script>

<script>

  import CovidStat from '../components/CovidStat.svelte';
  import CovidChart from '../components/CovidChart.svelte';
  import TableContainer from '../components/TableContainer.svelte';
  export let state;
  export let stateStats;
  export let historic;

</script>

<svelte:head>
  <title>Covid 19 {state} Tracker</title>
</svelte:head>

<div class="section header">
  <div class="container">
	  <h1>Covid 19 - {state}</h1>
	</div>
</div>

<CovidStat {...stateStats} />
<CovidChart historicData={historic} title="Covid 19 - {state}" />