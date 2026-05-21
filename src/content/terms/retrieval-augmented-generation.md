---
title: "Retrieval-Augmented Generation"
description: "An architectural pattern that retrieves relevant external data to enhance the accuracy of LLM responses."
related: ["context-layer", "prompt-context", "grounding-data"]
---

**Retrieval-Augmented Generation** is an architectural pattern that improves the quality and accuracy of large language model responses by retrieving verified, external facts to insert into the prompt before the model generates its reply.

## How it Works

RAG decouples static model knowledge from active information retrieval. When a query is received, the system searches external sources (like vector databases or SQL engines), extracts the most relevant text snippets or schemas, and merges them into the LLM prompt.

- **Semantic Retrieval**: Locates context using mathematical semantic match methods or keyword searches.
- **Dynamic Integration**: Appends the retrieved information directly into the prompt context, grounding the generation step.

## Lakehouse & Agentic Relevance

In data lakehouses, RAG is widely used to supply AI engines with real-time schemas, column mappings, and enterprise metrics without retraining models. For agentic analytics, RAG provides the schemas and guidelines needed to construct valid SQL statements. Using Dremio as a RAG query source allows organizations to retrieve governed, up-to-date data from physical tables like Apache Iceberg, ensuring that the model has access to the latest data snapshots.
