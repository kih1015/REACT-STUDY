# ─── Build 단계 ───────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build         # dist/ 생성

# ─── Runtime 단계 ─────────────────────────────────────────────
FROM node:20-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist
ENV NODE_ENV=production
CMD ["node", "dist/main"]
