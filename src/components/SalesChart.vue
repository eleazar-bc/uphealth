<template>
    <div>
        <BarChart :chartData="chartData" :options="options" />
        <!-- <div class="test" v-for="item in modified" :key="item.id">{{item}}</div> -->
    </div>
</template>

<script>
import { mapState } from "vuex";
import BarChart from "../components/BarChart";

export default {
    name: "SalesChart",
    components: {
        BarChart
    },
    data() {
        return {
            chartData: {},
            options: null,
            combinedTransactions: []
        };
    },
    computed: {
        ...mapState({
            transactions: state => state.transactions.sales
        })
    },
    created() {
        this.$store.dispatch("getAllSales");
        this.combineItems();
    },
    methods: {
        combineItems() {
            this.transactions.forEach(transaction => {
                this.combinedTransactions.push(this.sumQuantity(transaction.sales));
            });
        },
        sumQuantity(salesArray) {
            return salesArray.reduce((current, next) => ({
                id: next.id,
                name: next.name,
                price: next.price,
                quantity: current.quantity + next.quantity
            }));
        }
    },
    mounted() {
        (this.chartData = {
            labels: this.combinedTransactions.map(transaction => transaction.name),
            datasets: [
                {
                    label: "Sold",
                    backgroundColor: "#69e4a6",
                    data: this.combinedTransactions.map(transaction => parseInt(transaction.quantity)),
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