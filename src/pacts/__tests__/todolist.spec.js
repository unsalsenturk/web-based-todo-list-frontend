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

        const TODOLIST_DATA = [
            {
                id: 1,
                description : "buy some milk"
            },
        ]

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
            expect(res).toEqual(TODOLIST_DATA)
        });
        it('add to do list', async () => {
            await provider.addInteraction({
                state: "add todo list successfully",
                uponReceiving: 'request to create to-do list',
                withRequest: {
                    method: 'POST',
                    path: '/todolist',
                    body: eachLike({
                        id: 1,
                        description: like("buy some milk")
                    }),
                    headers: {
                        Accept: "application/json; charset=utf-8",
                    },
                },
                willRespondWith: {
                    status: 201,
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
            const res = await api.addTodo(TODOLIST_DATA)
            expect(res).toEqual(TODOLIST_DATA)

        });
    })
})