/** @type {import("drizzle-kit").Config} */
export default{
    schema:"./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials:{
        url: 'postgresql://neondb_owner:npg_wnWG3ty0DrLi@ep-misty-haze-a895sefy-pooler.eastus2.azure.neon.tech/ai-content-generator?sslmode=require'
    }
}