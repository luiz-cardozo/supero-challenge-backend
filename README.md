# Supero Challenge Backend

## Setup

Once you've installed `node`, `docker` and a package manager like `yarn` the following steps will allow you to run the project

To create the docker enviroment run

```
docker run --name supero-library -e POSTGRES_PASSWORD=postgres -p 5433:5432 -d postgres
```

To install the dependencies run

```
yarn
```

In order to have the database up and running the following command will be responsible to run the migration and seeds

```
yarn data
```

To run the project:

```
yarn start
```

## Features

- Search books by title ISBN or author
- List books
- Show the number of found entries considering filtering options
- Show all the register in a paginated fashion
- Filter books by a range of years
- See book details
