[![Travis CI status](https://travis-ci.org/ingvr/mern-store.svg?branch=master)](https://travis-ci.org/ingvr/mern-store) ![Codacy status](https://api.codacy.com/project/badge/Grade/da089022058e449589819d955a4f5611?isInternal=true) [![GitHub issues-closed](https://img.shields.io/github/issues-closed/ingvr/mern-store.svg)](https://GitHub.com/ingvr/mern-store/issues?q=is%3Aissue+is%3Aclosed) [![GitLicense](https://gitlicense.com/badge/ingvr/mern-store)](https://github.com/ingvr/mern-store/blob/master/LICENSE) [![built-with-love](https://img.shields.io/badge/build%20with-%E2%9D%A4-green)](https://github.com/ingvr/)

# M.E.R.N Store

Features:

- MongoDB + Express.js + React(+Redux) + Node.js Product Store
- RESTfull API
- Authorization with token
- Unit and components Tests

- Products List with CRUD actions
- Categories List with create and delete actions
- Filter by category by server request
- Pagination by server request

## How to run locally

1. Clone repo and change directory to project:

```bash
git clone https://github.com/ingvr/mern-store.git
cd mern-store
```

2. Install node packages on client:

```bash
cd client && npm install
```

3. Install node packages on server:

```bash
cd ../server && npm install
```

4. Back to project directory:

```bash
cd ..
```

5. Add .env file

   .env should be in ./client folder
   
   use ./cilent/.env_demo for example

6. Run in dev mode:

```bash
npm run dev
```

or

Run client build and production-ready mode:

```bash
npm start
```
