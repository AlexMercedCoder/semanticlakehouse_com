---
title: "Hive Metastore"
description: "A legacy service that stores metadata for Hive tables, often replaced by modern catalogs."
related: ["apache-polaris", "project-nessie", "iceberg-catalog"]
---

**Hive Metastore** (HMS) is a centralized metadata service that stores schema definitions, partition locations, and table structures for Hadoop-based SQL engines. It serves as the legacy metadata catalog for early data lake implementations.

## How it Works

Hive Metastore maps logical database structures to physical directories on distributed file systems or object storage.

- **Relational Backend**: Stores schema metadata, column definitions, and partition keys in a traditional relational database (such as PostgreSQL or MySQL).
- **Directory Mapping**: Tracks table locations by mapping them to specific directory paths. To read a table, query engines query HMS to retrieve file paths.
- **Partition Directory Scans**: Requires searching entire directory structures to identify partition layouts, which can introduce latency as directories grow.

## Lakehouse & Agentic Relevance

In a modern data lakehouse, Hive Metastore's directory-based approach is often replaced by file-level metadata catalogs to avoid bottlenecking query engines. Legacy HMS lacks support for modern transaction features like atomic multi-table updates. Organizations migrating to lakehouse architectures transition from Hive Metastore to modern catalogs like Apache Polaris or Project Nessie. Dremio connects to Hive Metastore to support legacy tables, virtualizing old data directories alongside modern Iceberg tables to ease migration.
