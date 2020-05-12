<template>
    <div>
        <BarChart :chartData="stocksChartData" :options="chartOptions" />
    </div>
</template>

<script>
import { mapState } from "vuex";
import BarChart from "./BarChart";

export default {
    name: "InventoryChart",
    components: {
        BarChart
    },
    computed: {
        ...mapState({
            allMedicines: state => state.products.medicines,
        }),
        stocksChartData() {
            return {
                labels: this.allMedicines.map(med => med.name),
                datasets: [
                    {
                        label: "Available Stock",
                        backgroundColor: "#3b86ff",
                        data: this.allMedicines.map(med => parseInt(med.stock))
                    },
                    {
                        label: "Sold",
                        backgroundColor: "#69e4a6",
                        data: this.allMedicines.map(transaction =>
                            parseInt(transaction.quantity)
                        )
                    }
                ]
            };
        },
        chartOptions() {
            return this.defineChartOptions();
        }
    },
    methods: {
        defineChartOptions() {
            return {
                responsive: true,
                maintainAspectRatio: false,
                ticks: {
                    min: 5
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
                }
            };
        }
    }
};
</script>

<style scoped>
</style>