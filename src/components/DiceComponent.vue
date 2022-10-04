<template>
  <div class="dice">
    <div v-if="value == 1" class="face face-1">
      <span class="dot" />
    </div>
    
    <div v-if="value == 2" class="face face-2">
      <span class="dot" />
      <span class="dot" />
    </div>
    
    <div v-if="value == 3" class="face face-3">
      <span class="dot" />
      <span class="dot" />
      <span class="dot" />
    </div>
    
    <div v-if="value == 4" class="face face-4">
      <div class="column">
        <span class="dot" />
        <span class="dot" />
      </div>

      <div class="column">
        <span class="dot" />
        <span class="dot" />
      </div>
    </div>
    
    <div v-if="value == 5" class="face face-5">
      <div class="column">
        <span class="dot" />
        <span class="dot" />
      </div>

      <div class="column">
        <span class="dot" />
      </div>

      <div class="column">
        <span class="dot" />
        <span class="dot" />
      </div>
    </div>
    
    <div v-if="value == 6" class="face face-6">
      <div class="column">
        <span class="dot" />
        <span class="dot" />
        <span class="dot" />
      </div>

      <div class="column">
        <span class="dot" />
        <span class="dot" />
        <span class="dot" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DiceComponent',
    props: {
      value: {
        type: Number,
        required: true
      },
    },
  }
</script>

<style scoped>
  .dice {
    background: var(--cream);
    color: var(--accent);
    width: 60px;
    height: 60px;
    border-radius: 10%;
    padding: 4px;
    box-shadow: 0px 0px 25px -8px var(--cream);
    display: inline-block;
    overflow: hidden;
  }

  .face {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .face-1 {
    justify-content: center;
    align-items: center;
  }

  .face-2, .face-3, .face-4, .face-5, .face-6 {
    justify-content: space-between;
  }

  .face-2 .dot:nth-of-type(1) {
    align-self: flex-end;
  }

  .face-3 .dot:nth-of-type(1) {
    align-self: flex-end;
  }

  .face-3 .dot:nth-of-type(2) {
    align-self: center;
  }

  .face-4 .column, .face-5 .column, .face-6 .column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .face-5 .column:nth-of-type(2) {
    justify-content: center;
  }
  
  .dot {
    background-color: var(--dark);
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
  }

</style>