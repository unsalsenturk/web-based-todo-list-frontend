import {shallowMount} from "@vue/test-utils";
import Home from "@/views/Home";
import ToDoList from "@/components/ToDoList";
import flushPromises from "flush-promises";
import API from "@/api";

const mockResponse = [
    {"id": 1, "description": "dummy data"}
]

jest.mock("@/api")

describe("Home.vue", () => {
    beforeAll(async () => {
        API.getTodoList.mockResolvedValue(mockResponse)
        API.addTodo.mockResolvedValue(mockResponse)
        await flushPromises()
    })
    describe("should check exist", () => {
        it('should Home component exists', () => {
            const wrapper = shallowMount(Home)
            expect(wrapper.exists()).toBeTruthy()
        });
        it('should todo-list component exists',  () => {
            const wrapper = shallowMount(Home)
            const ToDoListComponent = wrapper.findComponent(ToDoList)
            expect(ToDoListComponent.exists()).toBeTruthy()
        });
    })
})