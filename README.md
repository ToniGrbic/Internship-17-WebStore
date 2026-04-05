# Fullstack Webstore project in React.js and Nest.js

## deployed on AWS EC2: https://webstore.tonigrbic.online
## Run the app

1. In apps/Backend .env file put your values for JWT_TOKEN and DATABASE_URL

2. Postion to apps/Backend folder and run the following prisma command to apply existing migrations:
   ```
   npx prisma migrate deploy
   ```

3. Apply prisma seed for database:
  ```
  npx prisma db seed
  ```

4. In the root directory run the following commands to install dependencies and to run turbo repo project:
  ```
  npm i
  npm run build
  npm run start
  ```
