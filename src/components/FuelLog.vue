<template>
    <div class="fuel-logs-container">
        <h2>History of the last fuel logs {{ id }}</h2>

        <table class="fuel-logs-table">
            <thead>
            <tr>
                <th>Km traveled</th>
                <th>Liters</th>
                <th>Date of full up</th>
                <th>Efficiency (Km/L)</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="log in fuelLogs" :key="log.id">
                <td>{{ log.distance }}</td>
                <td>{{ log.liters }}</td>
                <td>{{ log.fill_up_date }}</td>
                <td v-if="log.liters > 0">{{ calculateEfficiency(log.distance, log.liters) }}</td>
                <td v-else>-</td>
            </tr>
            </tbody>
        </table>

        <h3>Add fuel log</h3>
        <form @submit.prevent="addFuelLog" class="fuel-log-form">
            <div>
                <label for="distance">Km traveled (km):</label>
                <input type="number" v-model="newLog.distance" required />
            </div>
            <div>
                <label for="liters">Liters:</label>
                <input type="number" v-model="newLog.liters" required />
            </div>
            <div>
                <label for="fill_up_date">Fill up date:</label>
                <input type="date" v-model="newLog.fill_up_date" required />
            </div>
            <button type="submit" class="submit-button">Add fuel log</button>
        </form>

        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            fuelLogs: [],
            newLog: {
                distance: '',
                liters: '',
                fill_up_date: '',
            },
            errorMessage: '',
        };
    },
    created() {
        this.fetchFuelLogs();
    },
    methods: {
        async fetchFuelLogs() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/cars/fuel-logs/${this.id}`);
                this.fuelLogs = response.data;
            } catch (error) {
                console.error(error);
                this.errorMessage = 'error fuel log: ' + error.message;
            }
        },
        async addFuelLog() {
            try {
                await axios.post(`http://127.0.0.1:8000/api/cars/fuel-logs/${this.id}`, this.newLog);
                this.fetchFuelLogs();
                this.newLog = { distance: '', liters: '', fill_up_date: '' };
            } catch (error) {
                console.error(error);
                this.errorMessage = 'Error at adding fuel log ' + error.message;
            }
        },
        calculateEfficiency(distance, liters) {
            return (distance / liters).toFixed(2);
        }
    }
};
</script>

<style scoped>
.fuel-logs-container {
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

h3 {
    margin-top: 30px;
}

.fuel-logs-table {
    width: 100%;
    border-collapse: collapse;
}

.fuel-logs-table th, .fuel-logs-table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

.fuel-logs-table th {
    background-color: #4CAF50;
    color: white;
}

.fuel-logs-table tr:hover {
    background-color: rgba(76, 175, 80, 0.1);
}

.fuel-log-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
}

.submit-button {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}

.submit-button:hover {
    background-color: #45a049;
    transform: scale(1.05);
}

.error-message {
    color: red;
    margin-top: 10px;
    text-align: center;
}
</style>
