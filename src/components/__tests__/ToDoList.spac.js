import {shallowMount} from "@vue/test-utils";
import ToDoList from "@/components/ToDoList";
import API from "@/api";


const mockResponse = [
    {"id": 1, "description": ""}
]

jest.mock("@/api")

describe("ToDoList.vue", () => {
    beforeAll(() => {
        API.getTodoList.mockResolvedValue(mockResponse)
    })
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
    describe("ToDoList component event test", () => {
        it("click event test", async () => {
            const wrapper = shallowMount(ToDoList)
            wrapper.setMethods({
                addBtnClick: jest.fn()
            })
            await wrapper.find("#addBtn").trigger("click")
            expect(wrapper.vm.addBtnClick).toHaveBeenCalled()
        });
    })
})