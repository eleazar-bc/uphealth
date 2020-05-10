<template>
    <div>
        <InventoryChart />
        <!-- <SalesChart /> -->
    </div>
</template>

<script>
import InventoryChart from "../components/charts/InventoryChart";
// import SalesChart from "../components/charts/SalesChart";

export default {
    name: "Dashboard",
    components: {
        InventoryChart,
        // SalesChart
    }
};
</script>

<style scoped>
</style>
