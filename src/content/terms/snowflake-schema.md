---
title: "Snowflake Schema"
description: "A database schema design where dimension tables are normalized into multiple related tables."
related: ["star-schema", "fact-table", "dimension-table"]
---

**Snowflake Schema** is a database design pattern in analytical modeling where dimension tables are normalized into multiple related tables. It is a variation of the star schema where nested relationships are split out to reduce data redundancy.

## How it Works

In a snowflake schema, high-cardinality dimension tables are split into smaller normalized tables. For example, instead of storing product categories in a single flat product dimension, category data is separated into its own table, requiring nested joins to retrieve product attributes.

- **Normalized Dimensions**: Reduces table size by eliminating duplicate string values in dimensional hierarchies.
- **Multi-Hop Joins**: Requires query engines to traverse multiple joins to connect the central fact table to outer dimension details.

## Lakehouse & Agentic Relevance

In a data lakehouse architecture, the snowflake schema reduces storage redundancy but introduces processing overhead due to multiple joins over object storage. For AI agents, the snowflake schema presents a higher risk of query generation errors. The multi-hop joins require the agent to maintain a larger mental map of foreign keys, increasing the likelihood of generating incorrect SQL joins. Dremio offsets this performance tax by virtualizing normalized tables into virtual star schemas, presenting a simplified layout to downstream agents.
