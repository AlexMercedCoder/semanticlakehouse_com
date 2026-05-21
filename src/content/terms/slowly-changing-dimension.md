---
title: "Slowly Changing Dimension"
description: "A data modeling technique for tracking historical changes in dimension attributes over time."
related: ["dimension-table", "fact-table", "time-travel"]
---

**Slowly Changing Dimension** is a data modeling pattern used in analytical databases to manage and track historical changes in dimension attributes over time. It ensures that transactions in fact tables can be analyzed using either historical values or current descriptions.

## How it Works

SCD handles updates using distinct structural strategies (Types) depending on how history must be preserved. The most common patterns are Type 1 (overwrite old values), Type 2 (create a new row with date ranges to preserve full history), and Type 3 (add a column for the previous value).

- **Type 1 (No History)**: Overwrites the existing attribute values immediately, losing historical context.
- **Type 2 (Full History)**: Appends a new record with starting/ending validity timestamps and active flag, maintaining a timeline of changes.

## Lakehouse & Agentic Relevance

In a data lakehouse, managing SCD Type 2 updates can be computationally expensive due to rewrite operations on object storage. Modern formats like Apache Iceberg ease this using merge-on-read operations and atomic transaction commits. For AI agents, querying SCD tables requires specific query syntax to filter by active records or date validity. If the semantic layer does not encapsulate this logic, agents can generate duplicate joins. Dremio virtual datasets simplify SCD consumption by pre-filtering active rows for downstream agents.
