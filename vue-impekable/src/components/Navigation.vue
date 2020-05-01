<template>
    <nav class="main-nav">
        <ul>
            <MenuItem v-for="menu in menus" v-bind:key="menu.title" v-bind:menu="menu" />
        </ul>
    </nav>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
    name: 'Navigation',
    components: {MenuItem},
    data() {
    return {
      menus: [
        {
          title: 'Home',
          url: '/home',
          src: 'images/icon_home.png'
        },
        {
          title: 'Dashboard',
          url: '/dashboard',
          src:'images/icon_dashboard.png'
        },
        {
          title: 'Inbox',
          url: '/inbox',
          src:'images/icon_inbox.png'
        },
        {
          title: 'Products',
          url: '/products',
          src:'images/icon_products.png'
        },
        {
          title: 'Invoices',
          url: '/invoice',
          src:'images/icon_Invoices.png'
        },
        {
          title: 'Costumers',
          url: '/costumers',
          src:'images/icon_customers.png'
        },
        {
          title: 'Chatroom',
          url: '/chat',
          src:'images/icon_chat-room.png'
        },
        {
          title: 'Calendar',
          url: '/calendar',
          src:'images/icon_calendar.png'
        },
        {
          title: 'Help Center',
          url: '/help',
          src:'images/icon_help-center.png'
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