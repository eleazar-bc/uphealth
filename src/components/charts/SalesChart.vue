<template>
    <div>
        <BarChart :chartData="chartData" :options="options" />
    </div>
</template>

<script>
import { mapState } from "vuex";
import BarChart from "./BarChart";

export default {
    name: "SalesChart",
    components: {
        BarChart
    },
    data() {
        return {
            chartData: {},
            options: null
        };
    },
    computed: {
        ...mapState({
            transactions: state => state.transactions.sales
        })
    },
    created() {
        this.$store.dispatch("getAllSales");
    },
    mounted() {
        (this.chartData = {
            labels: this.transactions.map(transaction => transaction.name),
            datasets: [
                {
                    label: "Sold",
                    backgroundColor: "#69e4a6",
                    data: this.transactions.map(transaction => parseInt(transaction.quantity)),
                }
            ]
        }),
        (this.options = {
            responsive: true,
            maintainAspectRatio: false
        });
    }
};
</script>

<style>
.test {
    display: flex;
    flex-direction: column;
    margin: 1em 0;
}
</style>