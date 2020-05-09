<template>
    <div>
        <BarChart :chartData="chartData" :options="options" />
    </div>
</template>

<script>
import { mapState } from "vuex";
import BarChart from "../components/BarChart";

export default {
    name: "InventoryChart",
    components: {
        BarChart
    },
    computed: {
        ...mapState({
            allMedicines: state => state.products.medicines
        })
    },
    data() {
        return {
            chartData: {},
            options: null
        };
    },
    created() {
        this.$store.dispatch("getAllMedicines");
    },
    mounted() {
        (this.chartData = {
            labels: this.allMedicines.map(med => med.name),
            datasets: [
                {
                    label: "Available Stock",
                    backgroundColor: "#69e4a6",
                    data: this.allMedicines.map(med => parseInt(med.stock)),
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

<style scoped>
</style>