<script>

export let stateName = "";
export let sortBy = "name";

</script>

<style>

  input, select, .select {
    width: 100%;
  }

  .column {
    padding-left: 2px;
    padding-right: 2px
  }

</style>

<div class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <input type="text" class="input" bind:value={stateName} placeholder="Filter States" />
      </div><!--column-->
      <div class="column is-6">
        <div class="select">
          <select bind:value={sortBy}>
            <option value="name">By state name</option>
            <option value="cases">Cases</option>
            <option value="deaths">Deaths</option>
            <option value="tested">Tested</option>
          </select>
        </div><!--select-->
      </div><!--column-->
    </div><!--columns-->
  </div><!--container-->
</div><!--section-->