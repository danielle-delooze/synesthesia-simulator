<template>
  <div id="app">
    <el-row>
      <span class="app__title">Synesthesia Simulator</span>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-row>
          <div>Customize your Colors</div>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div v-for="(color, letter) in letters" :key="letter" class="app__letters">
              <span>{{letter}}</span>
              <el-color-picker size="mini" class="app__colorpicker" v-model="letters[letter]"></el-color-picker>
            </div>
          </el-col>
          <el-col :span="8">
             <div v-for="(color, number) in numbers" :key="number" class="app__numbers">
              <span>{{number}}</span>
              <el-color-picker size="mini" class="app__colorpicker" v-model="numbers[number]"></el-color-picker>
            </div>
          </el-col>
          <el-col :span="8">
            <div v-for="(color, character) in characters" :key="character" class="app__characters">
              <span>{{character}}</span>
              <el-color-picker size="mini" class="app__colorpicker" v-model="characters[character]"></el-color-picker>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="18" class="app__codemirror">
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
      letters: {A: '#F40A0A', B: '#FCFAD3', C: '#67D5F7', D: '#BE0BD6', E: '#FFA600', F: '#45512b', G: '#18DD36',
                   H: '#FFE100', I: '#F5F7D6', J: '#E843F7', K: '#0095FF', L: '#08D5F5', M: '#E0B0FF', N: '#C69452',
                   O: '#0C0347', P: '#FF00E1', Q: '#E9C4BC', R: '#0F2E1C', S: '#FFFB00', T: '#E657EE', U: '#DCD9D9',
                   V: '#B1CFC4', W: '#71CCED', X: '#6F5642', Y: '#F9F8C0', Z: '#22A6F8'},
      numbers: {'0': '', '1': '', '2': '', '3': '', '4': '', '5': '', '6': '', '7': '', '8': '', '9': ''},
      characters: {'@': '', '$': '', '-': '', '+': '', '/': '', '*': '', '"': '', ':': '', ';': '', '!': '', '?': '',
                   '.': '', '\'': '', '[': '', ']': '', '=': '', '~': '', '#': '', '>': '', '<': ''}
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
  background-color: #FAFAFA;
}

.app {
  &__title {
    font-weight: bold;
    font-size: 34px;
  }

  &__characters, &__numbers, &__letters{
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
