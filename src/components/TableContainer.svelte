<script>

  import TableFilter from './TableFilter.svelte';
  import Table from './Table.svelte';

  export let data;
  let sortBy = 'name';
  let stateName = '';

  $: states = filterAndSort(data,stateName,sortBy);

  function filterAndSort(states, stateName, sortBy) {
    const filteredState = states.filter(state => {
      return (stateName === "" || state.fullStateName.toLowerCase().indexOf(stateName.toLowerCase()) > -1);
    });

    if (sortBy !== "name") {
      return filteredState.sort((a,b) => {
        return +(b[sortBy].replace(',','')) - +(a[sortBy].replace(',',''));
      });
    }
    return filteredState;
  }

</script>

<TableFilter bind:stateName bind:sortBy />
<Table {states} />
