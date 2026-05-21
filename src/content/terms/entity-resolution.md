---
title: "Entity Resolution"
description: "The process of identifying and linking records that refer to the same real-world entity."
related: ["semantic-reconciliation", "logical-data-model", "data-semantics"]
---

**Entity Resolution** is the data management process of identifying, matching, and merging distinct records across multiple data sources that represent the same real-world entity. It is necessary to eliminate duplicate entries and build a single, accurate view of business entities.

## How it Works

Entity resolution parses data from disparate systems (such as customer databases or transaction logs) and applies comparison rules to identify matches.

- **Schema Normalization**: Standardizes data formatting (e.g., casing, phone numbers, and addresses) to prepare records for comparison.
- **Blocking**: Groups similar records into blocks to reduce the number of direct comparisons required, optimizing computation.
- **Probabilistic Matching**: Uses algorithms (such as Jaro-Winkler distance or machine learning models) to score the likelihood that two records represent the same entity.

## Lakehouse & Agentic Relevance

In a data lakehouse, data is ingested continuously from numerous applications, resulting in redundant or fragmented records. For autonomous agents to accurately answer business questions, they must query clean, consolidated datasets. Entity resolution reconciles these discrepancies, providing agents with a reliable context layer. Dremio accelerates this workflow by virtualizing disparate tables and executing high-speed joins, allowing engineers to construct clean physical datasets without moving raw data.
