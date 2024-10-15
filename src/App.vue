<template>
    <div id="app">
        <nav class="navbar">
            <h1 class="logo">Car Manager</h1>
            <div class="links">
                <router-link to="/add-car" class="nav-link">Add a new car</router-link>
                <router-link to="/cars" class="nav-link">Available Car list</router-link>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f9;
    color: #333;
}

#app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.navbar {
    background-color: #4CAF50;
    color: white;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.logo {
    font-size: 1.5em;
    font-weight: bold;
}

.links {
    display: flex;
    gap: 15px;
}

.nav-link {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.nav-link:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
}

.nav-link:active, .nav-link.router-link-active {
    background-color: rgba(255, 255, 255, 0.3);
}

.router-view {
    margin-top: 20px;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
