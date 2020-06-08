# json-server-test
- Using json-server to simulate the `GET`, `DELETE`, `POST`, `PUT` function from the backend
- Through a normal `Angular APP`


# What is **json-server**
- This is a mock tool, `mock server`, mock data from the backend server. It could be used to build a local JSON service, and generate testing data.

- Github link - https://github.com/typicode/json-server#json-server--

# Installation

- `npm i -g json-server` 
- `json-server -v` to check the version and whether it is installed successfully
- `json-server data.json` or `json-server --watch data.json`

- Now under the root, there is a **`data.json`** file, which could be modified manuelly, but then need to run the `json-server data.json` again.

- if we use `db.json`, then a **`db.json`** is created instead of **`data.json`**

![image](https://user-images.githubusercontent.com/40550117/83990354-f386f100-a97b-11ea-8d3f-b1015c1cc363.png)


# Application

1. Input original data in `data.json`
```json
{
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    },
    {
      "id": 12,
      "title": "json-server2",
      "author": "typicode2"
    },
    {
      "id": 123,
      "title": "json-server23",
      "author": "typicode23"
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "users": [
    {
      "id": 2,
      "name": "Beta",
      "age": 19,
      "address": "Nurem"
    },
    {
      "id": 3,
      "name": "Cyder",
      "age": 20,
      "address": "Frank"
    },
    {
      "id": 4,
      "name": "Dilun",
      "age": 21,
      "address": "Gita"
    },
    {
      "name": "Alpha",
      "age": "18",
      "address": "HUoHUo",
      "id": 5
    },
    {
      "name": "jj",
      "age": "llll",
      "address": "hj",
      "id": 6
    },
    {
      "name": "rrr",
      "age": "",
      "address": "eee",
      "id": 7
    }
  ],
  "profile": {
    "name": "typicode"
  }
}
```

we use the `/users` here in this app simulation

2. run the following commands in order

- `ng serve` - to run the angular app on the local, now there is no data to fetch 
![image](https://user-images.githubusercontent.com/40550117/83990771-52009f00-a97d-11ea-85a9-11b71049f537.png)

- and then `json-server --watch data.json` - this step is to generate local data, and then the angular app could fetch from here.
```
PS D:\Angular\json-server-test> json-server --watch data.json     

  \{^_^}/ hi!

  Loading data.json
  Done

  Resources
  http://localhost:3000/posts
  http://localhost:3000/comments
  http://localhost:3000/users
  http://localhost:3000/profile

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database 
  Watching...
  ```


![image](https://user-images.githubusercontent.com/40550117/83990738-3bf2de80-a97d-11ea-8a18-92d2eebc4198.png)


3. When click **`Add`**, **`Delete`** or **`Edit`** button and confirm the changes, then the original data in `data.json` will be modified simutaneously.
