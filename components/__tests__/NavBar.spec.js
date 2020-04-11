import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import NavBar from '@/components/NavBar.vue'

const factory = () => {
  return shallowMount(NavBar, {
    stubs: {
      NuxtLink: RouterLinkStub
    }
  })
}

describe('NavBar', () => {
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

  it('nav should have 3 links', () => {
    expect(wrapper.findAll('nav a').length).toBe(3)
  })
})
