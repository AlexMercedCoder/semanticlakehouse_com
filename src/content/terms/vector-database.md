---
title: "Vector Database"
description: "A database optimized for indexing, storing, and querying high-dimensional vector embeddings."
related: ["vector-embeddings", "hybrid-search", "dense-retrieval"]
---

**Vector Database** is a specialized storage engine designed to index, store, and query high-dimensional vector representations of unstructured data. It enables applications to perform similarity searches based on semantic distance rather than exact keyword matches.

## How it Works

Unlike traditional relational databases that index structured columns, a vector database organizes data points in a multi-dimensional coordinate space. 

- **Similarity Search**: Employs mathematical distance formulas (such as cosine similarity, dot product, or Euclidean distance) to determine the proximity of vectors.
- **Indexing Algorithms**: Uses structures like Hierarchical Navigable Small World (HNSW) graphs or Inverted File Indexing (IVF) to search high-dimensional spaces in sub-linear time.

## Lakehouse & Agentic Relevance

In a modern data lakehouse, structured analytical tables and raw unstructured files must coexist. Autonomous agents rely on vector databases to retrieve relevant document chunks during Retrieval-Augmented Generation (RAG) tasks. To keep these vectors accurate, pipeline engines extract raw data from Apache Iceberg tables and feed them to the vector database. Dremio accelerates this pipeline by querying, virtualizing, and delivering massive lakehouse datasets to embedding models at low latency, streamlining vector synchronization.
