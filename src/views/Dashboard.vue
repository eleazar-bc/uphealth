<template>
    <div class="small">
        <InventoryChart :chartData="datacollection" :options="options"/>
    </div>
</template>

<script>
import InventoryChart from '../components/InventoryChart';

export default {
    name: 'Dashboard',
    components: {
        InventoryChart
    },
    data() {
        return {
            datacollection: null,
            chartData: [],
            options: []
        };
    },
    mounted() {
        this.fillData();
    },
    methods: {
        fillData() {
            this.datacollection = {
                labels: ['medicine1','medicine2'],
                datasets: [
                    {
                        label: "Available Stock",
                        backgroundColor: "#f87979",
                        data: [1, 22]
                    }
                ]
            };
        }
    }
};
</script>

<style scoped>
.small {
    max-width: 600px;
    margin: 150px auto;
}
</style>