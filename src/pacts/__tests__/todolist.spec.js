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

        const TODO = "buy some egg"
        const GET_TODOLIST_RES =  [
            {
                "id": 1,
                "description": "buy some milk"
            }
        ]

        const POST_TODOLIST_RES = {
            id: 2,
            description: "buy some egg"
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
                    path: '/api/v1/todolist'
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    body: [
                        {
                            "id": 1,
                            "description": "buy some milk"
                        }
                    ]
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
                    path: '/api/v1/todolist',
                    body: {
                        todo: like("buy some egg")
                    },
                },
                willRespondWith: {
                    status: 201,
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    body: {
                        id: 2,
                        description: like("buy some egg")
                    },
                }
            })
            const res = await api.addTodo(TODO)
            expect(res).toEqual(POST_TODOLIST_RES)

        });

    })
})

const {Publisher} = require("@pact-foundation/pact")
const opts = {
    pactBroker: 'https://unsalsenturkk.pactflow.io',
    pactBrokerToken: 'mCUautWrurN9Z4mTW4WMdA',
    consumerVersion: "1.0.0",
    //consumerVersion: process.env.GIT_COMMIT,
    pactFilesOrDirs: ['pact/pacts'],
};

new Publisher(opts).publishPacts()

