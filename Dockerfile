
FROM node:21.7.1 AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the entire application and build it
COPY . .
RUN npm run build

# Step 2: Production stage
FROM node:21.7.1 AS app

WORKDIR /app

# Copy only the necessary files from the builder
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000

CMD ["npm", "run", "start"]
