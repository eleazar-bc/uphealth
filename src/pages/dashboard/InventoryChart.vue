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
            allTransactions: state => state.transactions.sales
        }),
        stocksChartData() {
            return this.populateStocksData();
        },
        chartOptions() {
            return this.defineChartOptions();
        }
    },
    methods: {
        populateStocksData() {
            return {
                labels: this.allTransactions.map(med => med.name),
                datasets: [
                    {
                        label: "Available Stock",
                        backgroundColor: "#3b86ff",
                        data: this.allTransactions.map(med => parseInt(med.stock))
                    },
                    {
                        label: "Sold",
                        backgroundColor: "#69e4a6",
                        data: this.allTransactions.map(transaction =>
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