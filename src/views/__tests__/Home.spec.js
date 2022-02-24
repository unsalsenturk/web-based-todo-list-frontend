import {shallowMount} from "@vue/test-utils";


describe("Home.vue", () => {

    describe("should check exist", () => {
        it('should Home component exists', () => {
            const wrapper = shallowMount()
            expect(wrapper.exists()).toBeTruthy()
        });
    })
})