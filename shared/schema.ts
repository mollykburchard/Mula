import { sql } from "drizzle-orm";
import { pgTable, text, varchar, boolean, integer, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const siteContent = pgTable("site_content", {
  id: serial("id").primaryKey(),
  key: text("key").notNull().unique(),
  valueNl: text("value_nl").notNull().default(""),
  valueEn: text("value_en").notNull().default(""),
});

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  nameNl: text("name_nl").notNull(),
  nameEn: text("name_en").notNull(),
  descriptionNl: text("description_nl").notNull(),
  descriptionEn: text("description_en").notNull(),
  insured: boolean("insured").notNull().default(true),
  imageUrl: text("image_url"),
  videoUrl: text("video_url"),
  sortOrder: integer("sort_order").notNull().default(0),
  visible: boolean("visible").notNull().default(true),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertSiteContentSchema = createInsertSchema(siteContent).omit({ id: true });
export const insertServiceSchema = createInsertSchema(services).omit({ id: true });

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type SiteContent = typeof siteContent.$inferSelect;
export type InsertSiteContent = z.infer<typeof insertSiteContentSchema>;
export type Service = typeof services.$inferSelect;
export type InsertService = z.infer<typeof insertServiceSchema>;
