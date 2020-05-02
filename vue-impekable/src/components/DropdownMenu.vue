<template>
    <div class="dropdown container">
        <ul>
            <li>Change</li>
            <li>Done</li>
            <li>Clear</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'DropdownMenu'
};
</script>

<style scoped>
.dropdown {
    position: absolute;
    right: 4em;
    top: 0;
    visibility: hidden;
}
ul li {
    height: 4em;
    width: 10em;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #F1F1F3;
}
ul li:hover {
    cursor: pointer;
    background-color: #F0F0F7;
}
.showDropdown {
    visibility: visible;
}
</style>