---
title: "Object Storage"
description: "A flat file storage architecture (e.g., S3, ADLS) optimized for highly scalable unstructured data."
related: ["data-lakehouse", "parquet-format", "open-table-format"]
---

**Object Storage** is a flat, non-hierarchical storage architecture that manages data as distinct units called objects. It is optimized for storing massive volumes of unstructured and semi-structured data, serving as the physical storage layer for modern data lakes.

## How it Works

Object storage replaces directory hierarchies with a flat key-value namespace.

- **Flat Namespace**: Stores data in buckets, where each file is identified by a unique key path (e.g., `bucket/folder/file.parquet`), bypassing metadata lookups for directory paths.
- **RESTful APIs**: Accesses data using standard HTTP protocols (such as GET, PUT, and DELETE) rather than traditional POSIX filesystem operations.
- **Scalability**: Decouples compute from storage, allowing organizations to scale capacity infinitely and cost-effectively.

## Lakehouse & Agentic Relevance

In a data lakehouse, object storage holds physical data files (like Parquet) managed by open formats like Apache Iceberg. While object storage offers high scalability, it lacks native query execution capabilities. Autonomous agents require fast query access to analyze this data. Dremio bridges this gap by virtualizing object storage, enabling users and agents to query S3 or ADLS buckets directly using high-speed SQL without data movement.
