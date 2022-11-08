// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });

// Declare a route
fastify.get("/", async (request, reply) => {
  return {
    person1: {
      firstName: "Bob",
      lastName: "Smith",
      age: 30,
    },
    person2: {
      firstName: "Joe",
      age: 31,
    },
  };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
