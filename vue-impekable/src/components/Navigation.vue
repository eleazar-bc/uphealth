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
          isActive: true,
          title: 'Home',
          url: '#',
          src: 'images/icon_home.png'
        },
        {
          isActive: false,
          title: 'Dashboard',
          url: '#',
          src:'images/icon_dashboard.png'
        },
        {
          isActive: false,
          title: 'Inbox',
          url: '#',
          src:'images/icon_inbox.png'
        },
        {
          isActive: false,
          title: 'Products',
          url: '#',
          src:'images/icon_products.png'
        },
        {
          isActive: false,
          title: 'Invoices',
          url: '#',
          src:'images/icon_Invoices.png'
        },
        {
          isActive: false,
          title: 'Costumers',
          url: '#',
          src:'images/icon_customers.png'
        },
        {
          isActive: false,
          title: 'Chatroom',
          url: '#',
          src:'images/icon_chat-room.png'
        },
        {
          isActive: false,
          title: 'Calendar',
          url: '#',
          src:'images/icon_calendar.png'
        },
        {
          isActive: false,
          title: 'Help Center',
          url: '#',
          src:'images/icon_help-center.png'
        },
        {
          isActive: false,
          title: 'Settings',
          url: '#',
          src:'images/icon_setting.png'
        }
      ]
    }
  }
}
</script>

<style>

</style>