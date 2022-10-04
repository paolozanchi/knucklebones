<template>
  <table class="board">
    <tr
      v-for="rowIndex in 3"
      :key="rowIndex"
    >
      <td
        v-for="cellIndex in 3"
        :key="rowIndex * cellIndex"
        class="cell"
        :class="{ 'cellWithHover' : isPlayerBoard }"
        @click="clickedCell(rowIndex, cellIndex)"
      >
        <transition name="fade">
          <span>
            <DiceComponent 
              v-if="boardState[rowIndex - 1] && boardState[rowIndex - 1][cellIndex - 1]"
              :value="boardState[rowIndex - 1] && boardState[rowIndex - 1][cellIndex - 1]"
            />
          </span>
        </transition>

      </td>
    </tr>
  </table>
</template>

<script>
  import DiceComponent from './DiceComponent.vue'
  
  export default {
    name: 'KnucklebonesBoard',
    components: {
      DiceComponent
    },
    props: {
      boardState: {
        type: Array,
        required: true
      },
      isPlayerBoard: Boolean,
    },
    methods: {
      clickedCell(rowIndex, cellIndex) {
        if (this.isPlayerBoard) {
          this.$emit("clickedCell", rowIndex, cellIndex);
        }
      }
    }
  }
</script>

<style scoped>
  .board {
    margin: 0 auto;
    border-collapse: collapse;
  }
  
  .cell {
    border: 3px solid var(--accent);
    height: 100px;
    width: 100px;
    /* text-align: center; */
    transition: 200ms all;
  }

  .cellWithHover:hover {
    background-color: var(--lighter-accent);
  }
</style>
