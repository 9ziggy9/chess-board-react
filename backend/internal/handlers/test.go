package handlers

import (
  "time"
  "example.com/chess-board/internal/db"
  "go.mongodb.org/mongo-driver/bson/primitive"
  "github.com/gofiber/fiber/v2"
)

type Test struct {
  ID primitive.ObjectID `json: "_id" bson: "_id"`
  CreatedAt time.Time `json: "createdAt" bson: "created_at"`
  UpdatedAt time.Time `json: "updatedAt" bson: "updated_at"`
  Title string `json: "title" bson:"title"`
}

func CreateTest(c *fiber.Ctx) error {
  product := Product{
    ID: primitive.NewObjectId(),
    CreatedAt: time.Now(),
    UpdatedAt: time.Now(),
  }

  // very idiomatic golang
  // equivalent to:
  // err := c.BodyParser(&product)
  // if err != nil {
  //   return err
  // }

  if err := c.BodyParser(&product); err != nil {
    return err
  }

  client, err := db.GetMongoClient()
  if err != nil {
    return err
  }

  collection := client.Database(db.Database).Collection(string(db.ProductsCollection))
  _, err = collection.InsertOne(context.TODO(), product)
  if err != nil {
    return err
  }
}

func GetAllTests(c *fiber.Ctx) {
  
}
