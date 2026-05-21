---
title: "Star Schema"
description: "A database schema design consisting of a central fact table surrounded by multiple dimension tables."
related: ["fact-table", "dimension-table", "snowflake-schema"]
---

**Star Schema** is a database design pattern used in analytical data warehouses and dimensional modeling. It organizes data into a central fact table containing numerical measurements and a set of radial dimension tables containing descriptive context.

## How it Works

The star schema structures data to simplify joins and optimize query performance. The central fact table connects directly to each surrounding dimension table using foreign key relationships, creating a single-hop join pattern that query optimizers parse efficiently.

- **Central Fact Table**: Stores granular numerical metrics and transaction details joined to dimensions.
- **De-normalized Dimensions**: Keeps descriptive attributes in flat tables, reducing the number of joins needed to retrieve metadata context.

## Lakehouse & Agentic Relevance

In a data lakehouse, the star schema is the preferred layout for physical storage engines because it optimizes partition pruning and columnar file retrieval (e.g., in Apache Iceberg). For AI agents, the star schema's simplicity makes SQL generation highly accurate. Because table relationships are clean and predictable, the agent can write joins without getting lost in deep relational nesting. Dremio accelerates star schema queries by using Reflections to pre-calculate joins, providing sub-second analytical responses on data lakes.
