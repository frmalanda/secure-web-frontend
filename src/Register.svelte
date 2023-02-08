<script>
    
    import Locations from "./Sas.svelte";
    import axios from 'axios';


    let username = "";
    let password = "";
    let role = "user";

    

    async function submitForm(event) {
        event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch('http://localhost:3000/users/register', {
      method: 'POST',
      body: formData
    });
    const result = await response.json();
    console.log(result);
    }

  
</script>
 


<style>
    /* Styles pour le conteneur principal */
    .container {
        width: 400px;
        margin: 0 auto;
        text-align: center;
        padding: 50px;
    }

    /* Styles pour le titre */
    h1 {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    /* Styles pour le formulaire */
    form {
        width: 100%;
    }

    /* Styles pour les entrées de formulaire */
    input[type="text"],
    input[type="password"] {
        width: 100%;
        padding: 12px 20px;
        margin-bottom: 20px;
        box-sizing: border-box;
        border-radius: 4px;
        border: 1px solid #ccc;
    }

    /* Styles pour le bouton de soumission */
    input[type="submit"] {
        width: 100%;
        padding: 12px 20px;
        border-radius: 4px;
        border: none;
        background-color: #4CAF50;
        color: white;
        font-size: 18px;
        cursor: pointer;
    }
</style>

<div class="container">
    <h1>Register page</h1>
    <form on:submit|preventDefault={submitForm}>
        <input type="text" required bind:value={username} placeholder="Nom d'utilisateur" />
        <input type="password" required bind:value={password} placeholder="Mot de passe" />
        <input onclick="submit" type="submit" value="Se connecter" />
    </form>
</div>




