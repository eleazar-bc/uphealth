<template>
    <div class="small">
        <InventoryChart :chartData="datacollection" :options="options"/>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import InventoryChart from '../components/InventoryChart';

export default {
    name: 'Dashboard',
    components: {
        InventoryChart
    },
    computed: {
      ...mapState({
        allMedicines: state => state.products.medicines
    }),
    },
    data() {
        return {
            datacollection: null,
            chartData: [],
            options: null
        };
    },
    created() {
        this.$store.dispatch('getAllMedicines');
    },
    mounted() {
        this.fillData();
    },
    methods: {
        fillData() {
            this.datacollection = {
                labels: this.allMedicines.map(med => med.name),
                datasets: [
                    {
                        label: "Available Stock",
                        backgroundColor: "#69e4a6",
                        data: this.allMedicines.map(med => parseInt(med.stock)),
                        categoryPercentage: 1
                    }
                ]
            };
            this.options = {

            }
        }
    }
}
</script>

<style scoped>
.small {
    max-width: 50%;
    /* margin: 1em auto; */
}
</style>