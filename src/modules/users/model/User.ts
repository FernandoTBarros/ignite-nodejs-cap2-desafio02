import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor(name?: string, email?: string) {
    this.admin = false;
    this.created_at = new Date();
    this.updated_at = new Date();
    this.name = name;
    this.email = email;
    this.id = uuidV4();
  }
}

export { User };
