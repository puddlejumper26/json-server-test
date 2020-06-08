# json-server-test
- Using json-server to simulate the `GET`, `DELETE`, `POST`, `PUT` function from the backend
- Through a normal `Angular APP`


# What is **json-server**
- This is a mock tool, `mock server`, mock data from the backend server. It could be used to build a local JSON service, and generate testing data.

- Github link - https://github.com/typicode/json-server#json-server--

# Installation

- `npm i -g json-server` 
- `json-server data.json` or `json-server --watch data.json`

Now under the root, there is a **`data.json`** file, which could be modified manuelly, but then need to run the `json-server data.json` again.

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




