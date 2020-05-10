<template>
    <div>
        <BarChart :chartData="stocksChartData" :options="chartOptions" />
        <BarChart :chartData="salesChartData" :options="chartOptions" />
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
            transactions: state => state.transactions.sales
        }),
        stocksChartData() {
            return this.populateStocksData();
        },
        salesChartData() {
            return this.populateSalesData();
        },
        chartOptions() {
            return this.defineChartOptions();
        }
    },
    methods: {
        populateStocksData() {
            return {
                labels: this.allMedicines.map(med => med.name),
                datasets: [
                    {
                        label: "Available Stock",
                        backgroundColor: "#3b86ff",
                        data: this.allMedicines.map(med => parseInt(med.stock))
                    }
                ]
            };
        },
        populateSalesData() {
            return {
                labels: this.transactions.map(transaction => transaction.name),
                datasets: [
                    {
                        label: "Sold",
                        backgroundColor: "#69e4a6",
                        data: this.transactions.map(transaction =>
                            parseInt(transaction.quantity)
                        )
                    }
                ]
            };
        },
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