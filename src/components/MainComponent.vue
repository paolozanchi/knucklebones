<template>
  <main>
    <KnucklebonesBoard 
      :board-state="AIBoard"
      @clickedCell="clickedCell"
    />

    <hr />

    <KnucklebonesBoard 
      :board-state="playerBoard"
      :is-player-board="true"
      @clickedCell="clickedCell"
    />
  </main>
</template>

<script>
import KnucklebonesBoard from './KnucklebonesBoard.vue'

export default {
  name: 'MainComponent',
  components: {
    KnucklebonesBoard
  },
  data() {
    return {
      AIBoard: [
        [1, 2, 3],
        [4, 5, 6],
        [5, 4, 3],
      ],
      playerBoard: [
        [1, 2, 3],
        [4, 5, 6],
        [5, 4, 3],
      ],
    }
  },
  watch: {

  },
  mounted() {
    this.generateRandomBoard();
  },
  methods: {
    async clickedCell(rowIndex, cellIndex) {
      console.log("rowIndex", rowIndex)
      console.log("cellIndex", cellIndex)
    },
    generateRandomBoard() {
      for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
          this.AIBoard[x][y] = Math.floor(Math.random() * (6) + 1);
          this.playerBoard[x][y] = Math.floor(Math.random() * (6) + 1);
        }
      }
    }
  }
}
</script>

<style scoped>
  main {
    flex: 1 0 auto;
  }
</style>