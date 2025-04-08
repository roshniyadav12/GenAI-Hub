import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const aiOutput = pgTable("aiOutput", {
  id: serial("id").primaryKey(),
  formData: varchar("formData", 255).notNull(),
  aiResponse: text("aiResponse"),
  templateSlug: varchar("templateSlug", 255).notNull(),
  createdBy: varchar("createdBy", 255).notNull(),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(), // Ensure correct date format
});
