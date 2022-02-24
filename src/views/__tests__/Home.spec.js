import {shallowMount} from "@vue/test-utils";
import Home from "@/views/Home";


describe("Home.vue", () => {

    describe("should check exist", () => {
        it('should Home component exists', () => {
            const wrapper = shallowMount(Home)
            expect(wrapper.exists()).toBeTruthy()
        });
    })
})