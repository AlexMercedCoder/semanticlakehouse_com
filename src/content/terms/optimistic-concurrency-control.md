---
title: "Optimistic Concurrency Control"
description: "A concurrency control method that assumes conflicts are rare and resolves them during the write phase."
related: ["acid-transactions", "write-amplification", "open-table-format"]
---

**Optimistic Concurrency Control** (OCC) is a transaction management method that allows multiple clients to execute concurrent read and write operations without acquiring locks on database tables. Conflicts are resolved during the final commit phase.

## How it Works

OCC operates under the assumption that transaction conflicts are infrequent. It divides database writes into three distinct phases.

- **Read Phase**: The transaction reads the current state of the table and prepares its modifications in an isolated workspace.
- **Validation Phase**: The engine checks whether another transaction committed changes that overlap with the current transaction's operations.
- **Commit Phase**: If no conflicts are detected, the transaction writes its changes to metadata. If a conflict occurs, the transaction rolls back and retries.

## Lakehouse & Agentic Relevance

In a data lakehouse, multiple ingestion jobs and analytical engines access object storage concurrently. Using pessimistic locking on distributed object stores introduces latency and bottlenecks. Open table formats like Apache Iceberg use OCC to maintain ACID transactions at scale. When AI agents execute queries, they are assured of reading a clean, unconflicted table state. Dremio handles OCC conflicts transparently, retrying queries automatically when metadata updates overlap, ensuring consistent execution.
