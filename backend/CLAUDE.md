# Menora Backend

## What

TypeScript backend for an e-commerce product management system.
Built with Node.js 22, following Clean Architecture and Domain-Driven Design (DDD).

**Stack:** TypeScript 5 · Vitest · tsx (dev) · tsc (build) · pnpm

## Why

Manages a product catalog with strict domain validation. Core domains: Product, Customer, User, Address.
Business rules live in `src/domain/` — not in infrastructure or application layers.

## Structure

```
src/
  domain/        # Entities, value objects, domain errors — pure business logic
  application/   # Ports (interfaces) consumed by domain and infra
  infra/         # Infrastructure implementations (utils, adapters)
index.ts         # Entry point
```

Path alias: `@/*` → `src/*`

## How

```bash
pnpm dev          # Run with hot reload (tsx watch)
pnpm build        # Compile: tsc && tsc-alias → dist/
pnpm start        # Run compiled output
pnpm test         # Run all specs once (vitest run)
pnpm test:watch   # TDD watch mode
```

## Conventions

- Value objects go in `src/domain/value-objects/<Name>/`
- Domain errors go in `src/domain/errors/` under `validation/`, `logical/`, or `not-found/`
- Test files follow `**/*.spec.ts`
- Entities expose a static factory method and reject invalid state at construction time
