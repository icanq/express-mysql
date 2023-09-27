CREATE DATABASE IF NOT EXISTS test_app;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (username, email, password) VALUES
  ('johndoe', 'john@doe.com', '0w897qew8eyasdjo');

INSERT INTO posts (title, content, user_id) VALUES
  ('First Post', 'This is my first post', 1),
  ('Second Post', 'This is my second post', 1);