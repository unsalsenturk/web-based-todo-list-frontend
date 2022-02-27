import {pactWith} from 'jest-pact';
import {Matchers} from '@pact-foundation/pact';

const {eachLike, like} = Matchers

import {API} from "@/api";

pactWith({
    consumer: "Frontend",
    provider: "Backend"
}, provider => {
    describe("todo list", () => {

        let api

        const TODO = "buy some milk"
        const GET_TODOLIST_RES = [
            {
                id: 1,
                description: "buy some milk"
            }
        ]
        const POST_TODOLIST_RES = {
            id: 1,
            description: "buy some milk"
        }


        beforeEach(() => {
            api = new API(provider.mockService.baseUrl)
        })
        it('get to-do list', async () => {
            await provider.addInteraction({
                state: "get todo list successfully",
                uponReceiving: 'a request for getting all todo list',
                withRequest: {
                    method: 'GET',
                    path: '/todolist'
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    body:
                        eachLike({
                            id: 1,
                            description: like("buy some milk")
                        })
                }
            })
            const res = await api.getTodoList()
            expect(res).toEqual(GET_TODOLIST_RES)
        });
        it('add to do list', async () => {
            await provider.addInteraction({
                state: "add todo list successfully",
                uponReceiving: 'request to create to-do list',
                withRequest: {
                    method: 'POST',
                    path: '/todolist',
                    body: {
                        todo: like("buy some milk")
                    },
                },
                willRespondWith: {
                    status: 201,
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    body: {
                        id: 1,
                        description: like("buy some milk")
                    },
                }
            })
            const res = await api.addTodo(TODO)
            expect(res).toEqual(POST_TODOLIST_RES)

        });
    })
})