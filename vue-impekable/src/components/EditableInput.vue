<template>
  <div>
        <input
            v-on:keyup="handleInputChange()"
            type="text"
            v-model="item.value"
            v-bind:class="[borderStyle, {'name-input': item.titleStyle}]"
        />
        <div class="input-label">{{item.label}}</div>
    </div>
</template>

<script>
export default {
    name: 'EditableInput',
    props: ['item', 'save'],
    methods: {
        handleInputChange() {
            this.borderStyle = "green-border";
            this.$emit('updated', this.item);
        },
        restoreBorderStyle() {
            this.borderStyle = "grey-border"
        }
    },
    watch: {
        save: function() {
            this.restoreBorderStyle();
        }
    },
    data() {
        return {
            borderStyle: "grey-border"
        }
    }
}
</script>

<style scoped>
input.name-input {
    text-align: center;
    height: 32px;
}
.input-label {
    opacity: 0.5;
    font-size: 0.8125rem;
    align-self: center;
}
input[type="text"] {
    border: none;
    letter-spacing: 1px;
}
input[type="text"]:focus {
    border-bottom: 2px solid #3b86ff;
}
input[type="text"].green-border:focus {
    border-bottom: 2px solid #4ad991;
}
input.grey-border {
    border-bottom: 2px solid #e9e9f0;
}
input.green-border {
    border-bottom: 2px solid #4ad991;
}
</style>