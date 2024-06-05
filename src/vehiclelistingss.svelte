<script>
    // We'll fetch vehicle data later, for now, let's use some example data
    let vehicles = [
      { id: 1, name: 'Car 1' },
      { id: 2, name: 'Car 2' },
      { id: 3, name: 'Car 3' },
      // Add more vehicles if needed
    ];
  </script>
  
  <h1>Vehicle Listings</h1>
  
  <ul>
    {#each vehicles as vehicle}
      <li>{vehicle.name}</li>
    {/each}
  </ul>
  