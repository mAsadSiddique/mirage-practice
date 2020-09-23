// src/server.js
import { Server } from "miragejs";
import Books from './JSON/Books.json';

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

            this.get("/books", (schema) => {
                return Books
            })
        },
    })

    return server
}