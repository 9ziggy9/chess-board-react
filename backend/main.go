package main

import (
  // "fmt"
  "github.com/gofiber/fiber/v2"
  "log"
)

func main() {
  // Capital letters must be used to be exportable (public)
  // private methods are lowercase
  app := fiber.New()

  app.Get("/healthcheck", func (c *fiber.Ctx) error { // anonymous function
    return c.SendString("OK")
  })

  app.Get("/", func (c *fiber.Ctx) error { // anonymous function
    return c.SendString("Hello, world")
  })

  log.Fatal(app.Listen(":9001")) // logging errors
}
