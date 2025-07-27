FROM node:18-alpine AS builder

# Create app directory
WORKDIR /usr/src/app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy source code
COPY . .

# Build application
RUN pnpm build

# Production image
FROM node:18-alpine

WORKDIR /usr/src/app

# Copy only production dependencies
COPY --from=builder /usr/src/app/package.json ./
COPY --from=builder /usr/src/app/pnpm-lock.yaml ./

# Install pnpm and only production dependencies
RUN npm install -g pnpm && \
    pnpm install --prod

# Copy built application
COPY --from=builder /usr/src/app/dist ./dist

# Set NODE_ENV
ENV NODE_ENV=production

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/api/songs || exit 1

# Run application
CMD ["node", "dist/app.js"]