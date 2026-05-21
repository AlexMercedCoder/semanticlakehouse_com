---
title: "Fact Table"
description: "A central table in a dimensional model containing quantitative metrics and foreign keys to dimension tables."
related: ["dimension-table", "star-schema", "metrics-store"]
---

**Fact Table** is the central table in a dimensional data model that stores quantitative measurements, metrics, or transactional events. It consists primarily of numerical values (such as sales revenue, quantity sold, or latency times) and foreign key references to dimension tables.

## How it Works

Fact tables record physical events as they occur in operational systems. Because they store granular transaction details, they grow rapidly in volume. Query engines scan fact tables to aggregate values over various business attributes joined from dimension tables.

- **Numeric Measures**: Focuses on additive measurements (like revenue) that can be summed, averaged, or calculated across groups.
- **Foreign Keys**: Links each transaction row to specific entries in customer, time, product, or location dimension tables.

## Lakehouse & Agentic Relevance

In a data lakehouse, fact tables represent the bulk of the physical storage and are typically optimized using partition pruning, columnar storage, and compaction in formats like Apache Iceberg. For AI agents, fact tables are the primary target for quantitative query generation. In conversational analysis, the agent parses the fact table's columns to calculate sums, averages, or counts. Dremio speeds up fact table analysis on object storage by using Reflections, which pre-aggregates key metrics to provide sub-second query performance.
