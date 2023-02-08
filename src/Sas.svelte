<!-- Svelte code for a presentation page with colors -->
<style>
    main {
      background-color: #f0f8ff;
      color: #333;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
  
    h1 {
      font-size: 48px;
      margin-bottom: 1em;
    }
  
    button {
      background-color: #333;
      color: #f0f8ff;
      padding: 1em 2em;
      border: none;
      border-radius: 4px;
      font-size: 24px;
      margin: 1em;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #f0f8ff;
      color: #333;
    }
  </style>
  
  <main>
    <h1>Welcome</h1>
    <button on:click={() => window.location.href = 'http://localhost:3000/locations?offset=0&limit=10'}>
      Location
    </button>
    <button on:click={() => window.close()}>Exit</button>
  </main>
  