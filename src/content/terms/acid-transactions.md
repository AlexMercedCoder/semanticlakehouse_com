---
title: "ACID Transactions"
description: "The set of properties (Atomicity, Consistency, Isolation, Durability) guaranteeing reliable data operations."
related: ["open-table-format", "apache-iceberg", "optimistic-concurrency-control"]
---

**ACID Transactions** represent a set of database properties (Atomicity, Consistency, Isolation, and Durability) that guarantee reliable data operations. These properties ensure that database modifications are processed dependably, even in the event of system failures or concurrent access.

## How it Works

ACID properties enforce consistency at the engine and storage levels during multi-step write operations.

- **Atomicity**: Guarantees that all parts of a transaction succeed, or the entire transaction is rolled back, leaving no partial writes.
- **Consistency**: Ensures that a transaction only moves the database from one valid state to another, respecting all schema definitions and constraints.
- **Isolation**: Keeps concurrent transactions separated, preventing them from reading uncommitted data or causing conflicts.
- **Durability**: Ensures that once a transaction commits, its modifications are permanently recorded on non-volatile storage and will survive crashes.

## Lakehouse & Agentic Relevance

In legacy data lakes, the absence of ACID properties meant that concurrent reads and writes could yield corrupt or partial data. Open table formats like Apache Iceberg bring ACID compliance directly to cloud object storage. When autonomous agents execute analytic workflows, they require consistent data to avoid generating incorrect metrics. Dremio leverages the ACID guarantees of Iceberg and other formats, ensuring that agents and business intelligence tools read consistent snapshot states during concurrent updates.
