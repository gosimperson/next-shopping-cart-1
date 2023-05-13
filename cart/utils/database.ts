import { MongoClient } from "mongodb";

class DBConnection {
  private static instance: DBConnection;
  private url;
  private options: { [key: string]: any };
  private mongo: Promise<MongoClient> | undefined;

  constructor() {
    this.url = process.env.NEXT_PUBLIC_DATABASE_URL as string;
    this.options = { useNewUrlParser: true };
    this.mongo;

    if (DBConnection.instance) {
      return DBConnection.instance;
    }
    DBConnection.instance = this;
  }

  async connect() {
    if (process.env.NODE_ENV === "development") {
      if (!this.mongo) {
        this.mongo = new MongoClient(this.url, this.options).connect();
      }
      return this.mongo;
    } else {
      return new MongoClient(this.url, this.options).connect();
    }
  }
}

const mongoConnection = new DBConnection();
const connectDB = mongoConnection.connect();

export { connectDB };
