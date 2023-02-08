<script>
    import axios from 'axios';
    let username = 'franc';
    let password = 'franc';


    let items = [

    ];
    let page = 0;
    let itemsPerPage = 3;

    function prevPage() {
        if (page > 0) {
            page--;
        }
    }

    function nextPage() {
        if (page < items.length / itemsPerPage - 1) {
            page++;
        }
    }

    async function Affichage(event) {
        
        event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch('http://localhost:3000/users/login', {
      method: 'POST',
      body: formData
    });
    const result = await response.json();
    console.log(result);

        
    }
</script>

<ul>
    {#each items.slice(page * itemsPerPage, (page + 1) * itemsPerPage) as item}
        <li>{item.name}</li>
    {/each}
</ul>

<div class="container">
    <form on:submit|preventDefault={Affichage}>
        <input onclick="submit" type="submit" value="Afficher les locations" />
    </form>
</div>

<button on:click={prevPage}>Prev</button>
<button on:click={nextPage}>Next</button>