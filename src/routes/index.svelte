<script context="module">
  
  import requests from '../data/requests.js';

  export async function preload() {
    try {
      const usStats = await requests.usStats();
      const historic = await requests.historicUs();
      const stateData = await requests.statesData();
      return { historic, usStats, stateData };
    } catch(e) {
      console.log(e);
      this.error(500, "There was an error while trying to contact the network, please try again in a few minutes.");
      return;
    }
  }

</script>

<script>

import CovidStat from '../components/CovidStat.svelte';
import CovidChart from '../components/CovidChart.svelte';
import TableContainer from '../components/TableContainer.svelte';

export let usStats;
export let historic;
export let stateData;

</script>

<svelte:head>
  <title>Covid 19 US Tracker</title>
</svelte:head>

<div class="section header">
  <div class="container">
	  <h1>Covid 19 - US</h1>
	</div>
</div>

<CovidStat {...usStats}/>
<CovidChart historicData={historic} title="US Covid-19" />
<TableContainer data={stateData}/>