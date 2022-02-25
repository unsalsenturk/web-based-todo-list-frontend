import {shallowMount} from "@vue/test-utils";
import ToDoList from "@/components/ToDoList";

describe("ToDoList.vue", () => {
    describe("should check exist", () => {
        it('should ToDoList component exist', () => {
            const wrapper = shallowMount(ToDoList)
            expect(wrapper.exists()).toBeTruthy()
        });
        it('should textbox exist', () => {
            const wrapper = shallowMount(ToDoList)
            const txt = wrapper.find("#addTxt");
            expect(txt.exists()).toBeTruthy()
        });
        it('should add button exist', () => {
            const wrapper = shallowMount(ToDoList)
            const btn = wrapper.find("#addBtn");
            expect(btn.exists()).toBeTruthy()
        });
        it('should todo list exist', () => {
            const wrapper = shallowMount(ToDoList)
            const todolist = wrapper.find("#todolist");
            expect(todolist.exists()).toBeTruthy()
        });
    })
})