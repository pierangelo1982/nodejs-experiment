

```
docker run --name demo-postgres -e POSTGRES_PASSWORD=password1234 -p 5432:5432 -d postgres
```

```
docker run -p 8081:80 \
    --name demo-pgadmin \
    --link demo-postgres:db \
    -e 'PGADMIN_DEFAULT_EMAIL=pierangelo1982@gmail.com' \
    -e 'PGADMIN_DEFAULT_PASSWORD=password1234' \
    -d dpage/pgadmin4
    
```





## prisma

- `npm install prisma --save-dev`

- `npm install @prisma/client --save`

- `npx prisma`

- `npx prisma init`
