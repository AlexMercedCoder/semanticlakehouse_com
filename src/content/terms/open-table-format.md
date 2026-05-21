---
title: "Open Table Format"
description: "A specification defining how file organizations behave as transaction-safe tables on object storage."
related: ["apache-iceberg", "delta-lake", "apache-hudi"]
---

**Open Table Format** is a standardized specification that structures collection of physical data files (such as Parquet, ORC, or Avro) to behave as a single, transactional database table on cloud object storage. It provides ACID transaction compliance, schema enforcement, and partition management.

## How it Works

Open table formats abstract raw files by using metadata layers that sit between the query engine and storage.

- **Metadata Layer**: Instead of scanning directories, the query engine reads metadata files to determine which physical files belong to the current table state.
- **Atomic Commits**: Swaps pointers in a catalog or transaction log to make modifications visible as a single, atomic step.
- **Format Independence**: Enables multiple query engines to read and write to the same physical table simultaneously without conflicts.

## Lakehouse & Agentic Relevance

In a data lakehouse architecture, open table formats (like Apache Iceberg or Delta Lake) prevent vendor lock-in, enabling unified data access. Organizations can use different compute engines for ingestion, streaming, and BI on the same tables. For autonomous agents, open table formats provide a stable database interface. Dremio provides high-performance SQL query virtualization over these open table formats, enabling agents to run queries across the lakehouse using standard SQL.
