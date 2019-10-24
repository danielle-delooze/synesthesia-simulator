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
      <el-col :span="16" class="app__codemirror">
        <codemirror></codemirror>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => {
    return {
      characters: {A: '#F40A0A', B: '#FCFAD3', C:'#67D5F7', D: '', E: '', F: '', G: '', H: '', I: '', J: '', K: '', L: '',
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

  &__codemirror {
    margin-top: 20px;
  }
}

.CodeMirror {
  text-align: left !important;
}
</style>
