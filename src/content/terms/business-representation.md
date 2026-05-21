---
title: "Business Representation"
description: "The user-friendly interface or abstraction layer presenting technical data as clear business concepts."
related: ["semantic-layer", "logical-view", "virtual-dataset"]
---

**Business Representation** is the abstraction layer within a semantic model that exposes technical database elements to users as clear business entities. It shields non-technical users from database complexities like schemas, columns, partitions, or database platforms.

## How it Works

The business representation maps physical database schemas to intuitive business metrics and dimensions. When users select fields from the business directory, the semantic engine translates their logical requests into SQL queries, handling the underlying joins and queries automatically.

- **Logical Abstraction**: Replaces database column codes with simple labels (like replacing `txn_amt_usd` with "Transaction Amount").
- **Auto-Join Management**: Resolves database relationships behind the scenes, eliminating the need for users to write SQL join code.

## Lakehouse & Agentic Relevance

In a data lakehouse, a business representation creates a clean doorway for exploring data stored in object storage. For AI agents, querying a business representation is safer and more reliable than querying physical tables. It replaces thousands of columns and complex relationships with a clean dictionary, lowering the rate of SQL generation hallucinations. Dremio provides business representation through virtual datasets, enabling data teams to expose standardized directories to users and agents.
