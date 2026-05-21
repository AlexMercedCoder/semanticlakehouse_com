---
title: "Hybrid Search"
description: "An information retrieval method combining keyword match (BM25) with vector semantic search."
related: ["vector-database", "dense-retrieval", "sparse-retrieval"]
---

**Hybrid Search** is a data retrieval methodology that combines lexical keyword searching with dense vector semantic searching to improve accuracy. It reconciles the precision of exact keyword matches with the deep conceptual understanding of machine learning embeddings.

## How it Works

A hybrid search engine processes a single user query by executing two parallel lookup mechanisms.

- **Lexical Retrieval**: Uses sparse indices (like BM25) to find exact term matches, ensuring names, codes, or specific terminology are not missed.
- **Semantic Retrieval**: Uses dense vector embeddings to locate documents sharing conceptual meaning, capturing intent even if different words are used.
- **Score Fusion**: Combines and normalizes the results from both pathways using algorithms like Reciprocal Rank Fusion (RRF) to generate a single re-ranked list.

## Lakehouse & Agentic Relevance

In a data lakehouse, information is stored as both highly structured tables and semi-structured text files. For autonomous agents executing analytics, relying solely on keyword search misses conceptual context, while vector-only search fails on exact identifiers like IDs or product codes. Hybrid search bridges this gap, enabling agents to retrieve highly accurate grounding data. In an ecosystem powered by Dremio, hybrid search queries can access virtualized datasets to locate documentation and table metadata, optimizing retrieval performance across the lakehouse.
