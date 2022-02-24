import {shallowMount} from "@vue/test-utils";
import Home from "@/views/Home";


describe("Home.vue", () => {

    describe("should check exist", () => {
        it('should Home component exists', () => {
            const wrapper = shallowMount(Home)
            expect(wrapper.exists()).toBeTruthy()
        });
        it('should todo-list component exists', () => {
            const wrapper = shallowMount(Home)
            const todo-list = wrapper.findComponent(todo-list)
            expect(todo-list.exists()).toBeTruthy()
        });
    })
})