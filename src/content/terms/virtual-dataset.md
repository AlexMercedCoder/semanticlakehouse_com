---
title: "Virtual Dataset"
description: "A logical data view in Dremio that abstracts physical tables for user consumption without duplicating storage."
related: ["physical-dataset", "logical-view", "semantic-layer"]
---

**Virtual Dataset** is a logical, query-defined data abstraction within the Dremio platform. It presents physical data tables or files as a clean, standardized dataset to downstream BI tools and consumers without copying or duplicating the underlying storage files.

## How it Works

A virtual dataset is defined entirely by an SQL query. When an application queries a virtual dataset, Dremio compiles the request, combines it with the logical definition, and executes the query directly against the physical storage layer using its columnar acceleration engine.

- **Logical Layering**: Allows architects to build nested layers of virtual tables to handle joins, filters, and computed columns.
- **Zero Copy**: Provides customized views of data for different business teams without generating extra storage footprints.

## Lakehouse & Agentic Relevance

In a data lakehouse, virtual datasets form the building blocks of the semantic layer, masking complex physical structures like Apache Iceberg partitioning and storage directories. For agentic analytics, virtual datasets serve as clean, pre-joined query boundaries. Exposing virtual datasets to AI agents instead of raw tables simplifies schema complexity and lowers SQL generation errors.
