<template>
    <div>
        <BarChart :chartData="stocksData" :options="options" />
        <BarChart :chartData="salesData" :options="options" />
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
        })
    },
    data() {
        return {
            stocksData: {},
            salesData: {},
            options: {}
        };
    },
    created() {
        this.$store.dispatch("getAllMedicines");
        this.$store.dispatch("getAllSales");
    },
    mounted() {
        this.stocksChartData();
        this.salesChartData();
        this.chartOptions();
    },
    methods: {
        stocksChartData() {
            this.stocksData = {
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
                        data: this.transactions.map(transaction =>
                            parseInt(transaction.quantity)
                        )
                    }
                ]
            };
        },
        salesChartData() {
            this.salesData = {
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
        chartOptions() {
            this.options = {
                responsive: true,
                maintainAspectRatio: false,
                ticks: {
                    min: 5
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            // display: true,
                            // minRotation: 1,
                            // maxRotation: 1,
                            // min: 1,
                            // max: 100,
                            // maxTicksLimit: 10
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