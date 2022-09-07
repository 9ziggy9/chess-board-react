package db

import (
  "sync"
  "go.mongodb.org/mongo-driver/mongo"
)

// uninitialized
var clientInstance *mongo.Client
var mongoOnce sync.Once
var clientInstanceError error

const (
  url = "mongodb://localhost:27017" // default mongoDB port
  Database = "chess-api"
)

func GetMongoClient() (*mongo.Client, error){
  // sync once ensuring we can only ever do this once
  mongoOnce.Do(func() {
    clientOptions := options.Client().ApplyURI(url)
    client, err := mongo.Connect(context.TODO(), clientOptions)
    clientInstance = client // assigning value to clientInstance pointer
    clientInstanceError = err
  })
  return clientInstance, clientInstanceError
}
