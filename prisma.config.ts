// prisma.config.ts
import { defineConfig } from '@prisma/config';
import { config } from 'dotenv';

// Paksa baca file .env
config();

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
  },
});