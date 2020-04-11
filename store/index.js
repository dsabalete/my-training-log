import Vue from 'vue'
import Vuex from 'vuex'
import CalculatorModule from './modules/CalculatorModule'

// Look into Error: [vuex] Do not mutate vuex store state outside mutation handlers
export const strict = false

Vue.use(Vuex)

export const modules = {
  calculator: CalculatorModule
}
