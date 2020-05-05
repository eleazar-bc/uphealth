<template>
    <div class="add-item-container container">
        <div @click="showInputGroup = !showInputGroup" class="title-container">
            <div class="title">Add new product</div>
            <div class="showHide">
              <img v-if="showInputGroup" src="images/icon_up-arrow-small.png" alt />
                <img v-if="!showInputGroup" src="images/small-down.png" alt />
            </div>
        </div>
        <div v-if="showInputGroup" class="input-group animated fadeIn">
            <input type="text" placeholder="Product Name" />
            <input type="text" placeholder="Brand (Generic / Branded)" />
            <input type="text" placeholder="Dosage" />
            <input type="text" placeholder="Type (Capsule / Tablet / Syrup / Etc)" />
            <input type="text" placeholder="Stock" />
            <input type="text" placeholder="Price" />
            <div class="action-buttons">
                <div class="button">Save</div>
                <div class="button">Clear</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddItem",
    data() {
      return {
        showInputGroup: false
      }
    }
};
</script>

<style scope>
.add-item-container {
    padding: 1em;
    display: flex;
    flex-direction: column;
}
.title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}
.input-group {
  display: flex;
  flex-direction: column;
  margin-top: 1em;
}
.input-group input[type="text"] {
    margin: 0.3em 2em;
    height: 32px;
    border: none;
    border-bottom: 2px solid #e9e9f0;
    letter-spacing: 1px;
}
.input-group input[type="text"]:focus {
  border-bottom: 2px solid #3B86FF;
}
.action-buttons {
    margin-top: 1em;
    display: flex;
    justify-content: flex-end;
}
.button {
    margin-left: 1em;
    height: 42px;
    width: 120px;
    background-color: #ffffff;
    border: 1px solid #e8e9ec;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.button:hover {
    background-color: #3b86ff;
    color: #ffffff;
}
</style>