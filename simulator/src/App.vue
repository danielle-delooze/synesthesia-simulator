<template>
  <div id="app">
    <el-row>
      <span class="app__title">Synesthesia Simulator</span>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div v-for="(color, character) in characters" :key="character" class="app__characters">
          <span>{{character}}</span>
          <el-color-picker size="mini" class="app__colorpicker" v-model="characters[character]"></el-color-picker>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => {
    return {
      characters: {A: '', B: '', C:'', D: '', E: '', F: '', G: '', H: '', I: '', J: '', K: '', L: '',
      M: '', N: '', O: '', P: '', Q: '', R: '', S: '', T: '', U: '', V: '', W: '', X: '', Y: '', Z: ''}
    }
  }
}
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app {
  &__title {
    font-weight: bold;
    font-size: 34px;
  }

  &__characters {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  &__colorpicker {
    margin-left: 20px;
    vertical-align: bottom;
  }
}
</style>
