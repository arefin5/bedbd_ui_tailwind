# # Stage 1: Build the application
# FROM node:21.7.1 AS builder

# WORKDIR /app

# COPY package*.json ./
# RUN npm ci

# COPY . .
# RUN npm run build

# # Stage 2: Serve the application
# FROM node:21.7.1 AS app

# WORKDIR /app

# COPY --from=builder /app/next.config.mjs ./
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/node_modules ./node_modules


# EXPOSE 3000

# # CMD ["serve", "-s", "-l", "3000", ".next"]
# CMD ["npm", "run", "start"]
# Stage 1: Build the application
FROM node:21.7.1 AS builder

WORKDIR /app

# Copy both package.json and package-lock.json if present
COPY package*.json ./
RUN npm ci

# Copy the rest of your application
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM node:21.7.1 AS app

WORKDIR /app

# Copy the necessary files from the builder stage
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# RUN npm install -g serve

EXPOSE 3000

CMD ["npm", "run", "start"]
