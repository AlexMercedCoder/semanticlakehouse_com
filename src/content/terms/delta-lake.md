---
title: "Delta Lake"
description: "An open-source storage framework that enables building a lakehouse architecture on top of object stores."
related: ["data-lakehouse", "apache-iceberg", "apache-hudi"]
---

**Delta Lake** is an open-source storage format designed to enable transaction management and ACID properties on top of cloud object storage. It organizes data in Parquet files alongside a centralized transaction log, providing warehouse-grade reliability to data lakes.

## How it Works

Delta Lake abstracts raw storage directories into transactional tables by keeping a record of all modifications.

- **Transaction Log (Delta Log)**: A JSON-based commit log tracking metadata changes. Every write transaction creates a new log file, serving as the single source of truth for the table's state.
- **ACID Transactions**: Guarantees atomic operations by ensuring that reads and writes are fully committed to the Delta Log before becoming visible to queries.
- **Schema Enforcement**: Prevents write operations from inserting incompatible column types or columns, preventing data corruption.

## Lakehouse & Agentic Relevance

In a data lakehouse, organizations often store data in multiple formats, including Delta Lake and Apache Iceberg. Autonomous agents querying the lakehouse must access these tables seamlessly without dealing with format compatibility issues. Dremio handles this by virtualizing both Delta Lake and Apache Iceberg tables. Dremio enables users and agents to query Delta Lake files using standard SQL at high speeds, removing the need for manual data conversion and consolidating the lakehouse query layer.
