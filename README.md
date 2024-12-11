# Prisma-week-18-cohort-3
# Prisma ORM with PostgreSQL and TypeScript

This repository explores the use of Prisma ORM for type-safe and efficient database management with PostgreSQL in a TypeScript environment.

## Topics Covered

### 1. **What is Prisma?**
- Prisma is a next-generation ORM that simplifies database interaction with:
  - Type-safe queries.
  - Automatic schema migrations.
  - Modern query-building capabilities.

### 2. **Defining Database Models**
- Prisma schema is defined in the `schema.prisma` file.
- Models represent database tables with features like:
  - Primary keys (`@id`).
  - Unique constraints (`@unique`).
  - Relationships (`@relation`).

### 3. **CRUD Operations with Prisma Client**
- Prisma Client provides type-safe methods to interact with the database:
  - **Create:** Add new records.
  - **Read:** Fetch single or multiple records.
  - **Update:** Modify existing records.
  - **Delete:** Remove records.

### 4. **Handling Relationships**
- Include related data in queries using `include` or `select`.
- Perform nested writes to create related records in a single query.

### 5. **Error Handling**
- Handle errors gracefully in type-safe queries to ensure reliability.

### 6. **Database Management**
- Apply schema changes with migrations (`prisma migrate`).
  
### 7. **Type-Safe Querying**
- Prisma auto-generates a fully-typed client, ensuring safer and more predictable database interactions.

---

## Resources
- [Prisma Documentation](https://www.prisma.io/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
