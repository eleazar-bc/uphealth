<template>
    <div>
        <input
            v-on:input="handleInputChange()"
            v-bind:type="item.type"
            v-model="item.value"
            v-bind:class="[borderStyle, {'name-input': item.titleStyle}]"
            @keyup.enter="focusNextInput"
        />
        <div class="input-label">{{item.label}}</div>
    </div>
</template>

<script>
export default {
    name: "EditableInput",
    props: ["item", "flags"],
    methods: {
        handleInputChange() {
            this.borderStyle = "green-border";
            if (this.item.type == "number") {
                this.item.value = parseInt(this.item.value);
            }
            this.$emit("updated", this.item);
        },
        restoreBorderStyle() {
            this.borderStyle = "grey-border";
        },
        setDefaultValue() {
            this.defaultValue = this.item.value;
        },
        focusNextInput(event) {
            const nextInputElement =
                event.target.parentElement.nextSibling.children[0];
            nextInputElement.focus();
        }
    },
    watch: {
        "flags.save": function() {
            this.restoreBorderStyle();
            this.setDefaultValue();
        },
        "flags.cancel": function() {
            this.item.value = this.defaultValue;
            this.restoreBorderStyle();
        }
    },
    data() {
        return {
            defaultValue: "",
            borderStyle: "grey-border"
        };
    },
    mounted() {
        this.setDefaultValue();
    }
};
</script>

<style scoped>
input.name-input {
    text-align: center;
    width: 80%;
}
.input-label {
    opacity: 0.5;
    font-size: 0.8125rem;
    align-self: center;
}
input {
    border: none;
    letter-spacing: 1px;
}
input:focus {
    border-bottom: 2px solid #3b86ff;
}
input.green-border:focus {
    border-bottom: 2px solid #4ad991;
}
input.grey-border {
    border-bottom: 2px solid #e9e9f0;
}
input.green-border {
    border-bottom: 2px solid #4ad991;
}
</style>