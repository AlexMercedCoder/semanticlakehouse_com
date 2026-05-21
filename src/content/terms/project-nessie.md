---
title: "Project Nessie"
description: "A transactional catalog for data lakes offering Git-like version control for tables."
related: ["apache-polaris", "iceberg-catalog", "apache-iceberg"]
---

**Project Nessie** is an open-source, transactional catalog designed for data lakes. It brings Git-like version control paradigms (such as branches, commits, merges, and tags) to database tables, enabling multi-table transactions and versioning.

## How it Works

Project Nessie tracks table pointers as a versioned history log, enabling developers to isolate data modifications.

- **Git-Like Branching**: Allows data engineers to create data branches (e.g., a "dev" branch) to ingest, test, or modify tables without affecting the production branch.
- **Atomic Merges**: Commits changes to production by executing an atomic merge operation at the catalog level, ensuring that changes across multiple tables become visible simultaneously.
- **Zero-Copy Tagging**: Creates point-in-time references (tags) to specific catalog states without replicating the underlying data files, supporting historical reproducibility.

## Lakehouse & Agentic Relevance

In a data lakehouse, executing complex data pipelines across multiple tables can lead to inconsistent intermediate states. Project Nessie provides transactional isolation, ensuring that query engines only read validated datasets. For autonomous agents, Nessie branch versioning allows running queries on isolated development branches to test generated SQL before merging. Dremio integrates natively with Project Nessie, allowing users and agents to query Nessie branches directly using SQL commands, simplifying multi-table version control.
