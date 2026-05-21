---
title: "Data Lakehouse"
description: "An open data architecture combining data lake scale and flexibility with data warehouse transaction features."
related: ["apache-iceberg", "semantic-layer", "query-virtualization"]
---

**Data Lakehouse** is a modern data management architecture that combines the cost-efficiency, flexibility, and scale of a data lake with the transactional integrity, governance, and query performance of a traditional data warehouse. It serves as a unified repository for both structured and unstructured analytical workloads.

## How it Works

The data lakehouse architecture separates storage from compute, storing data in open file formats like Parquet on inexpensive object storage. A transactional metadata layer sits on top of these files, coordinating atomic transactions, enforcing schema rules, and managing partitioning metadata dynamically.

- **Storage Layer**: Utilizes scalable object stores to host files, reducing storage costs compared to proprietary warehouses.
- **Compute Isolation**: Enables multiple specialized engines to query the same underlying tables simultaneously without resource contention.

## Semantic & Agentic Relevance

By eliminating the need to duplicate and move data between lakes and warehouses, the lakehouse provides a single source of truth for semantic models. This consolidation simplifies metadata governance, providing AI agents with reliable, up-to-date data for RAG and Text-to-SQL workflows. Dremio realizes the lakehouse vision by delivering direct, high-performance query execution on open formats like Apache Iceberg, eliminating the need for database extraction pipelines.
