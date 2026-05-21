---
title: "Apache Iceberg"
description: "A high-performance open table format for huge analytic datasets, enabling SQL table behaviors on object storage."
related: ["data-lakehouse", "open-table-format", "iceberg-catalog"]
---

**Apache Iceberg** is an open-source, high-performance table format designed for managing huge analytical datasets on object storage. It enables SQL tables to run on data lakes, allowing multiple query engines to safely read and write to the same data files simultaneously.

## How it Works

Iceberg organizes data using a hierarchical metadata tree rather than relying on directory paths. When data is written, the engine creates new Parquet files and records them in a metadata hierarchy, making the updates immediately visible as atomic transactions.

- **Metadata Layer**: Tracks table state using metadata files, manifest lists, and manifest files to achieve isolation and ACID compliance.
- **Hidden Partitioning**: Manages partition keys automatically, preventing queries from full-scanning tables due to user partitioning mistakes.

## Lakehouse & Agentic Relevance

Iceberg is the foundational storage format for the modern data lakehouse, enabling warehouse-level ACID safety directly on cheap cloud storage. In AI and agentic analytics pipelines, Iceberg's time-travel capabilities allow agents to query historical data snapshots, ensuring analysis repeatability. Dremio integrates natively with Apache Iceberg, optimizing query plans through metadata pushdowns and offering automated table maintenance to maximize read performance.
