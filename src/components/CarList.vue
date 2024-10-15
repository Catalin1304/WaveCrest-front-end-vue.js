<template>
    <div class="car-list-container">
        <h2>List of the cars</h2>
        <table class="car-table">
            <thead>
            <tr>
                <th style="width: 25%;">Brand</th>
                <th style="width: 25%;">Model</th>
                <th style="width: 25%;">Year</th>
                <th style="width: 25%;">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="car in cars" :key="car.id">
                <td>{{ car.brand }}</td>
                <td>{{ car.model }}</td>
                <td>{{ car.year }}</td>
                <td>
                    <router-link :to="'/cars/' + car.id + '/fuel-logs'" class="action-link">
                        See the fuel Log
                    </router-link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            cars: []
        };
    },
    async created() {
        await this.fetchCars();
    },
    methods: {
        async fetchCars() {
            try {
                const response = await axios.get('http://localhost:8000/api/cars');
                this.cars = response.data;
            } catch (error) {
                console.error('error on the cars:', error);
            }
        }
    }
};
</script>

<style scoped>
.car-list-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

.car-table {
    width: 100%;
    border-collapse: collapse;
}

.car-table th, .car-table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

.car-table th {
    background-color: #4CAF50;
    color: white;
}

.car-table tr:hover {
    background-color: rgba(76, 175, 80, 0.1);
}

.action-link {
    color: #4CAF50;
    text-decoration: none;
    font-weight: bold;
}

.action-link:hover {
    text-decoration: underline;
}
</style>
