import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import ResultsRM from '@/components/ResultsRM.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    weight: 50,
    reps: 5
  }
})

const factory = () => {
  return shallowMount(ResultsRM, {
    propsData: {
      rm1: 90
    },
    store,
    localVue
  })
}

describe('ResultsRM', () => {
  let wrapper

  beforeEach(() => {
    wrapper = factory()
  })

  it('should be a Vue Instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have 10 h4 elements', () => {
    expect(wrapper.findAll('h4').length).toBe(10)
  })
})
