<template>
    <div class="add-car-container">
        <h2>Add a New Car</h2>
        <form @submit.prevent="addCar" class="add-car-form">
            <div class="form-group">
                <label for="brand">Brand:</label>
                <input type="text" v-model="brand" required class="form-input" />
            </div>
            <div class="form-group">
                <label for="model">Model:</label>
                <input type="text" v-model="model" required class="form-input" />
            </div>
            <div class="form-group">
                <label for="year">Year:</label>
                <input type="number" v-model="year" required class="form-input" />
            </div>
            <button type="submit" class="submit-button">Add Car</button>
        </form>
        <p v-if="message" class="message">{{ message }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            brand: '',
            model: '',
            year: null,
            message: ''
        };
    },
    methods: {
        async addCar() {
            try {

                const response = await axios.post('http://localhost:8000/api/cars', {
                    brand: this.brand,
                    model: this.model,
                    year: this.year
                });

                console.log(response.data);

                this.message = 'Car added successfully!';


                this.brand = '';
                this.model = '';
                this.year = null;
            } catch (error) {
                console.error(error);
                this.message = 'Failed to add car.';
            }
        }
    }
};
</script>

<style scoped>
.add-car-container {
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin: 0 auto;
}

h2 {
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.form-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s ease;
}

.form-input:focus {
    border-color: #4CAF50;
    outline: none;
}

.submit-button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    font-size: 16px;
}

.submit-button:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
}

.message {
    margin-top: 20px;
    color: #4CAF50;
}
</style>
