import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import MainHeader from "../MainHeader.vue";

// const localVue = createLocalVue();
// localVue.use(Vuex);

// describe('MainHeader', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = shallowMount(MainHeader, { localVue});
//   });

//   it('renders', () => {
//     console.log(wrapper.html());
//   });
// });

describe("MainHeader", () => {
  test("является экземпляром Vue", () => {
    const wrapper = mount(MainHeader);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

// instanceof('unit test for search-bsr', () => {
//   console.log('test is empty');
//   expect(true).toBe(true);
// });
