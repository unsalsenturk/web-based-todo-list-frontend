import {shallowMount} from "@vue/test-utils";
import Home from "@/views/Home";
import ToDoList from "@/components/ToDoList";


describe("Home.vue", () => {

    describe("should check exist", () => {
        it('should Home component exists', () => {
            const wrapper = shallowMount(Home)
            expect(wrapper.exists()).toBeTruthy()
        });
        it('should todo-list component exists', () => {
            const wrapper = shallowMount(Home)
            const ToDoListComponent = wrapper.findComponent(ToDoList)
            expect(ToDoListComponent.exists()).toBeTruthy()
        });
    })
})