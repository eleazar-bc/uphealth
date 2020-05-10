<template>
    <nav class="main-nav">
        <ul>
            <NavigationItem v-for="menu in menus" v-bind:key="menu.title" v-bind:menu="menu" />
        </ul>
    </nav>
</template>

<script>
import NavigationItem from '../components/NavigationItem.vue';

export default {
    name: 'Navigation',
    components: {NavigationItem},
    data() {
    return {
      menus: [
        {
          title: 'Home',
          url: '/home',
          src: 'images/icon_home.png'
        },
        {
          title: 'Inventory',
          url: '/inventory',
          src:'images/icon_products.png'
        },
        {
          title: 'Dashboard',
          url: '/dashboard',
          src:'images/icon_dashboard.png'
        },
        {
          title: 'Invoice',
          url: '/invoice',
          src:'images/icon_invoices.png'
        },
        {
          title: 'Costumers',
          url: '/costumers',
          src:'images/icon_customers.png'
        },
        {
          title: 'Settings',
          url: '/settings',
          src:'images/icon_setting.png'
        }
      ]
    }
  }
}
</script>

<style>

</style>