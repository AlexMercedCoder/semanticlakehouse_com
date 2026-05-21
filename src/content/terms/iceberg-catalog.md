---
title: "Iceberg Catalog"
description: "The component that tracks the current state (current metadata pointer) of an Apache Iceberg table."
related: ["apache-polaris", "project-nessie", "apache-iceberg"]
---

**Iceberg Catalog** is the centralized, transaction-safe service that tracks the location of the current metadata file for Apache Iceberg tables. It provides the single source of truth for query engines to locate table structures and commit changes.

## How it Works

An Iceberg catalog manages the atomic transition of metadata pointers, preventing file state divergence during concurrent writes.

- **Pointer Reference**: Stores a map of table names to the path of their current metadata JSON files (e.g., `db.table` -> `s3://bucket/metadata/v4.metadata.json`).
- **Atomic Commits**: Performs compare-and-swap operations to update the table pointer when modifications are written, verifying that no other transaction committed first.
- **Engine Coordination**: Exposes standard APIs (such as the Iceberg REST API) so that Spark, Flink, and Dremio can locate data consistently.

## Lakehouse & Agentic Relevance

In a data lakehouse, without an Iceberg catalog, query engines would have to scan raw object store directories, which is slow and lacks transactional safety. Catalogs (such as Apache Polaris, Project Nessie, or AWS Glue) enforce security rules and lock management. AI agents query tables through catalogs to access current data. Dremio acts as a compute engine that connects directly to Iceberg catalogs, allowing agents to execute queries using Dremio's virtualization layer.
