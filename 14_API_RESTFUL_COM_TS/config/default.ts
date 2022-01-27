const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

export default {
    port: 3000,
    dbURI: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.yw6uw.mongodb.net/apiTS?retryWrites=true&w=majority`,
    env: "development"
}