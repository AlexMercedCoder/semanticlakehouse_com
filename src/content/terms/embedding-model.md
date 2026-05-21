---
title: "Embedding Model"
description: "A machine learning model that converts raw text into low-dimensional vector representations."
related: ["vector-embeddings", "vector-database", "semantic-chunking"]
---

**Embedding Model** is a neural network model designed to translate unstructured data, such as sentences, paragraphs, or images, into a low-dimensional dense vector space. This numerical output captures semantic relationships, positioning similar concepts close to each other in the vector space.

## How it Works

Embedding models ingest text blocks and process them through deep learning layers (such as transformer architectures) to generate high-dimensional float arrays (vectors).

- **High-Dimensional Mapping**: Represents semantic features in a mathematical space that often spans hundreds or thousands of dimensions.
- **Semantic Proximity**: Arranges data so that similar concepts (like "revenue" and "sales") generate vectors with high cosine similarity, while unrelated terms are mapped far apart.

## Lakehouse & Agentic Relevance

In data lakehouse platforms, embedding models convert enterprise metadata, query logs, and structured tables into vectors to support semantic search. Autonomous agents utilize these models to encode user queries before matching them against a vector database for Retrieval-Augmented Generation (RAG). By integrating embedding models with data platforms, users can query lakehouse data in natural language. Dremio facilitates this integration by serving as a high-speed data source, supplying clean text data to embedding pipelines and querying structured vectors stored in Apache Iceberg tables.
