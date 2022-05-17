module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost2"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "codewithharry"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "PostgreSQL02Prince09@2000"),
      schema: env("DATABASE_SCHEMA", "public"),
    },
  },
});
