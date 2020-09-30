// src/server.js
import { Server } from "miragejs";
import books from './json/books.json';

export function makeServer() {
    let server = new Server({



        // environment,

        // models: {
        //     user: Model,
        // },

        // seeds(server) {
        //     server.create("user", { name: "Bob" })
        //     server.create("user", { name: "Alice" })
        // },

        routes() {
            this.namespace = "api"

            this.get("/books", () => {
                return books;
            })
            this.post("/add", (schema, request) => {
                console.log(request)
                const newBook = JSON.parse(request.requestBody);
                books.push(newBook);
            })
        },
    })

    return server;
}