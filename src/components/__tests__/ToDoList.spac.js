import {shallowMount} from "@vue/test-utils";
import ToDoList from "@/components/ToDoList";
import API from "@/api";
import flushPromises from "flush-promises";


const mockResponse = [
    {"id": 1, "description": ""}
]

jest.mock("@/api")

describe("ToDoList.vue", () => {
    let wrapper
    beforeAll(async () => {
        API.getTodoList.mockResolvedValue(mockResponse)
        wrapper = shallowMount(ToDoList)
        await flushPromises()
    })
    describe("should check exist", () => {
        it('should ToDoList component exist', () => {
            expect(wrapper.exists()).toBeTruthy()
        });
        it('should textbox exist', () => {
            const txt = wrapper.find("#addTxt");
            expect(txt.exists()).toBeTruthy()
        });
        it('should add button exist', () => {
            const btn = wrapper.find("#addBtn");
            expect(btn.exists()).toBeTruthy()
        });
        it('should todo list exist', () => {
            const todolist = wrapper.find("#todolist");
            expect(todolist.exists()).toBeTruthy()
        });
    })
    describe("ToDoList component event test", () => {
        it("click event test", async () => {
            wrapper.setMethods({
                addBtnClick: jest.fn()
            })
            await wrapper.find("#addBtn").trigger("click")
            expect(wrapper.vm.addBtnClick).toHaveBeenCalled()
        });
    })
})