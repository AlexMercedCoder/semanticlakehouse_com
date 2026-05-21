---
title: "Logical View"
description: "A virtual table defined by an analytical query that presents dynamic data without storing physical copies."
related: ["logical-data-model", "virtual-dataset", "physical-dataset"]
---

**Logical View** is a virtual database table defined by an SQL query. It does not store physical data on disk; instead, it executes its defining query dynamically whenever it is referenced by a downstream tool, presenting clean data on demand.

## How it Works

When an application queries a logical view, the query parser retrieves the view's definition, merges it with the incoming user query, and optimizes the combined statement. The database engine executes the optimized query directly against the underlying physical tables.

- **Query Encapsulation**: Hides complex SQL joins, logic, and calculations behind a simple, reusable table interface.
- **Dynamic Compilation**: Re-runs the underlying query at execution time, ensuring that the presentation layer always reflects current table data.

## Lakehouse & Agentic Relevance

In a data lakehouse, logical views provide security and abstraction, letting teams mask sensitive columns or filter out records before data reaches downstream users. For AI agents, querying logical views is safer and faster than navigating raw physical tables. The view pre-packages complex relational joins, allowing the agent to write simple queries instead of reconstructing database schemas. Dremio leverages logical views (as Virtual Datasets) to virtualize data lake storage, allowing sub-second SQL access.
