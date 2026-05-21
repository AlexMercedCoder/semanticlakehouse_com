---
title: "Query Virtualization"
description: "Accessing and querying data across multiple heterogeneous sources without moving or replicating it."
related: ["dremio", "query-federation", "pushdown-query"]
---

**Query Virtualization** is a data management capability that allows applications to query data across disparate databases, file systems, and cloud storage systems without copying, moving, or replicating it to a centralized warehouse.

## How it Works

Query virtualization uses an abstraction layer that translates queries into native source formats dynamically.

- **Unified Schema Abstraction**: Exposes physical data tables and file structures as logical, virtual tables in a single catalog.
- **Dynamic Translation**: Translates SQL commands from the client into query formats matching the underlying source databases (e.g., MongoDB, relational databases, or object storage files).
- **Distributed Query Planning**: Deconstructs a single SQL statement into sub-queries, running them across different sources and compiling the results in memory.

## Lakehouse & Agentic Relevance

In a data lakehouse, data is stored across object stores and relational databases. Moving this data to run queries adds latency and cost. Query virtualization allows organizations to access this data instantly. For autonomous agents, virtualization provides a single interface to query multiple tables. Dremio provides query virtualization, allowing agents to execute SQL across files, catalogs, and databases without manual data pipelines.
