# SemanticLakehouse.com: Knowledge Base Construction Guide

This document outlines the standard guidelines for developing, structuring, and writing the 100 knowledge base articles. By following these rules, we ensure the knowledge base is optimized for SEO, fits cleanly into AI context windows, and maintains a consistent senior-architect voice.

---

## 1. Editorial & Writing Standards (Voice & AI-ism Avoidance)

To ensure a highly professional and natural technical voice, we must adhere strictly to the following editorial standards. These guidelines are designed to eliminate common "AI writing markers" and establish credibility with senior engineers and architects.

### Grammatical and Stylistic Rules
- **No Em-Dashes (`—`)**: Do not use em-dashes. AI models heavily over-use them to connect ideas. Replace them with commas, semicolons, or parenthetical statements to create a smoother, more human cadence.
- **No Emojis**: Emojis detract from the technical authority of the documentation. Maintain a clean, text-centric interface.
- **List Consistency**: Always use hyphens (`-`) for bulleted lists. Avoid asterisks (`*`) or mixed conventions.
- **No Internal Horizontal Rules**: Do not use markdown lines (`---`) to separate sections within the body of an article. Keep the layout clean and use nested headings (`##`, `###`) to establish visual hierarchy. The only permitted `---` is the frontmatter delimiter at the top of the file.

### Forbidden Vocabulary and AI Cliches
Do not use marketing fluff, hype words, or cinematic transitions. Eliminate the following terms entirely:
- *Delve into* / *Dive deep into* (instead use "explains," "analyzes," or "details")
- *Game-changer* / *Paradigm shift*
- *Unlock* / *Unleash*
- *Explore* (avoid statements like "We will explore X"; instead, write "Section X explains how...")
- *Comprehensive guide* / *Practical guide*
- *Fast-paced digital landscape* / *In today's data-driven world*
- *In a world of...* (never start a paragraph with cinematic, grand openings)

### Tone and Perspective
- **Senior Architect Voice**: Write as a senior systems architect speaking directly to a peer. Prioritize describing under-the-hood mechanics, protocol interactions, and architectural trade-offs rather than listing marketing features.
- **Active and Direct**: Use active verbs. Be concise, direct, and high-density with technical information.

---

## 2. Article Structure & Word Count

Each knowledge base article must be structured as a small, self-contained "atomic" concept. This makes it highly readable for humans, indexable for search engines, and ideal for retrieval systems (RAG).

### Target Word Count
- **150 to 250 words per article** (excluding frontmatter). 
- *Rationale*: Sticking to this length prevents fluff, makes the content easy to scan, and fits perfectly within LLM prompt limits when pulled as context.

### Markdown Document Template
Every markdown file under `src/content/terms/` must follow this structure:

```markdown
---
title: "Term Name"
description: "A single, clear sentence summarizing the term and its purpose."
related: ["related-term-slug-1", "related-term-slug-2"]
---

**Term Name** is [immediate, clear definition of the term without introductory filler]. [Explain the primary function or why it is necessary in a single sentence].

## How it Works

[A brief paragraph detailing the under-the-hood mechanics. Focus on data flow, interfaces, or protocol interactions. Keep sentences direct. Use commas instead of em-dashes for clarity.]

- **Key Component**: [Brief detail]
- **Key Component**: [Brief detail]

## Lakehouse & Agentic Relevance

[Explain how this term connects to the Semantic Layer, Data Lakehouse, or Agentic Analytics ecosystem. Explicitly reference Dremio's integration where applicable, such as how Dremio handles semantic virtualization or optimizes Apache Iceberg tables.]
```

---

## 3. The 100 Target KB Terms

These 100 terms are selected to optimize search coverage and relevance across four core pillars: **Semantic Layer**, **Context Layer**, **Data Lakehouse**, and **Agentic Analytics**. 

### Category 1: Semantic Layer & Data Modeling (25 Terms)
1. **semantic-layer**: A business representation of corporate data that helps end users access data autonomously.
2. **metrics-store**: A centralized repository that defines and governs business metrics independently of downstream tools.
3. **headless-bi**: An architectural pattern that decouples the semantic layer from frontend BI visualization tools.
4. **logical-data-model**: A conceptual representation of data structures, relationships, and business rules.
5. **governed-metric**: A standardized metric definition managed centrally to ensure data consistency across an organization.
6. **dimension-table**: A table containing descriptive attributes (e.g., customer name, product category) used to filter and group facts.
7. **fact-table**: A table containing quantitative measurements, metrics, or keys to dimension tables.
8. **data-hierarchy**: A systematic ordering of data levels (e.g., Year > Quarter > Month) for analytical drill-downs.
9. **logical-view**: A virtual table defined by a query that does not store physical data but presents it dynamically.
10. **aggregation-path**: The defined route or strategy for rolling up granular data into higher-level summaries.
11. **role-playing-dimension**: A single physical dimension table that acts in multiple logical roles within a database schema (e.g., Order Date vs Shipping Date).
12. **slowly-changing-dimension**: A data modeling technique for tracking historical changes in dimension attributes over time.
13. **calculation-group**: A modeling feature that allows the reuse of complex calculations across multiple metrics.
14. **metadata-registry**: A centralized system containing definitions, lineages, and ownership details for enterprise data assets.
15. **semantic-modeling**: The process of defining the meaning, relationships, and constraints of data entities.
16. **derived-measure**: A metric calculated by applying mathematical operations to one or more base metrics.
17. **star-schema**: A relational database schema consisting of one central fact table surrounded by dimension tables.
18. **snowflake-schema**: A star schema variant where dimension tables are normalized into multiple related tables.
19. **relational-modeling**: Structuring data into tables, rows, and columns with explicit foreign key relationships.
20. **data-semantics**: The metadata defining the real-world meaning and business context of stored data elements.
21. **business-representation**: The user-friendly interface or abstraction layer presenting technical data to business users.
22. **virtual-dataset**: A logical, query-defined dataset in Dremio that abstracts physical tables for user consumption.
23. **physical-dataset**: A direct representation of a database table, file, or object store location in Dremio.
24. **semantic-reconciliation**: The process of mapping divergent data definitions across systems to a single semantic standard.
25. **time-relative-metrics**: Metrics computed relative to a point in time (e.g., Year-over-Year, Year-to-Date).

### Category 2: Context Layer & RAG (25 Terms)
26. **context-layer**: The abstraction layer providing metadata, business rules, and state details to LLMs.
27. **llm-context-window**: The maximum volume of tokenized data an LLM can process in a single inference cycle.
28. **prompt-context**: The specific grounding information injected into a prompt to guide model generation.
29. **retrieval-augmented-generation**: A technique that enhances LLM responses by retrieving relevant data from external sources.
30. **semantic-router**: A component that directs user queries to specific models, databases, or workflows based on intent.
31. **text-to-sql-context**: The schema definitions, examples, and rules supplied to an LLM to improve SQL generation accuracy.
32. **grounding-data**: Factually verified data used to anchor LLM responses and prevent hallucination.
33. **vector-embeddings**: Numerical representations of text or data capturing semantic meaning in a high-dimensional space.
34. **knowledge-graph**: A network of real-world entities and their semantic relationships stored as nodes and edges.
35. **semantic-graph**: A graph representation focused on the semantic and logical associations between concepts.
36. **vector-database**: A database optimized for indexing, storing, and querying high-dimensional vector embeddings.
37. **hybrid-search**: An information retrieval method combining keyword match (BM25) with vector semantic search.
38. **chunking-strategy**: The method of splitting large text documents into smaller segments for embedding and retrieval.
39. **embedding-model**: A machine learning model that converts raw text into low-dimensional vector representations.
40. **semantic-chunking**: Segmenting text based on logical shifts in meaning rather than fixed character counts.
41. **metadata-enrichment**: Adding descriptive tags, classifications, or semantic relationships to raw data.
42. **dense-retrieval**: Retrieving documents by measuring distance between continuous vector embeddings.
43. **sparse-retrieval**: Retrieving documents using exact match indices like term frequencies (e.g., TF-IDF or BM25).
44. **cross-encoder-reranking**: A second-stage retrieval step that scores the relevance of retrieved chunks using deep model attention.
45. **vector-indexing**: Algorithms (e.g., HNSW, IVF) that structure vector space to enable sub-linear similarity search.
46. **graph-database**: A database system designed to store and query highly connected data models natively.
47. **entity-resolution**: The process of identifying and linking records that refer to the same real-world entity.
48. **ontology-ai**: A formal representation of concepts, classes, and properties used to structure AI context.
49. **user-persona-context**: Metadata representing the user's role, permissions, and history to tailor AI interactions.
50. **prompt-engineering-context**: Structured instructions and guidelines injected into prompts to control LLM behavior.

### Category 3: Data Lakehouse & Storage (25 Terms)
51. **data-lakehouse**: An open architecture combining lake storage economics with warehouse-grade transaction management.
52. **apache-iceberg**: An open, high-performance table format for massive analytical datasets.
53. **delta-lake**: An open-source storage framework that enables building a lakehouse architecture on top of object stores.
54. **apache-hudi**: A transactional lakehouse table format optimized for fast upserts, deletes, and incremental queries.
55. **acid-transactions**: The set of properties (Atomicity, Consistency, Isolation, Durability) guaranteeing reliable data operations.
56. **schema-evolution**: The capability to modify table schemas (e.g., adding columns) without rewriting historical data.
57. **hidden-partitioning**: A feature in Apache Iceberg that automatically manages partitions without requiring user-facing columns.
58. **time-travel**: Querying historical states of a table by referencing specific timestamps or snapshot IDs.
59. **partition-evolution**: Updating a table's partitioning strategy over time without rebuilding the entire table.
60. **open-table-format**: A specification defining how file organizations behave as transaction-safe tables on object storage.
61. **apache-polaris**: An open-source metadata catalog for Apache Iceberg providing cross-engine access control.
62. **project-nessie**: A transactional catalog for data lakes offering Git-like version control for tables.
63. **hive-metastore**: A legacy service that stores metadata for Hive tables, often replaced by modern catalogs.
64. **object-storage**: A flat file storage architecture (e.g., S3, ADLS) optimized for highly scalable unstructured data.
65. **parquet-format**: An open-source, columnar storage file format optimized for fast query performance in analytical engines.
66. **manifest-file**: An Iceberg metadata file tracking the physical data files associated with a specific table snapshot.
67. **manifest-list**: An Iceberg metadata file containing details about all the manifest files in a single table snapshot.
68. **table-metadata-spec**: The structural layout defining how snapshots, schemas, and partition specs are recorded in a table format.
69. **optimistic-concurrency-control**: A concurrency control method that assumes conflicts are rare and resolves them during the write phase.
70. **write-amplification**: The ratio of data written to storage relative to the logical amount of data changed by a write operation.
71. **compaction**: The background process of consolidating small files into larger, optimized files to speed up queries.
72. **merge-on-read**: A write strategy that logs changes to separate delta files, resolving merges dynamically during queries.
73. **copy-on-write**: A write strategy that immediately creates a new data file combining changes with unmodified data.
74. **z-ordering**: A multidimensional clustering technique that organizes data files to optimize query filtering on multiple columns.
75. **iceberg-catalog**: The component that tracks the current state (current metadata pointer) of an Apache Iceberg table.

### Category 4: Agentic Analytics & AI Execution (25 Terms)
76. **agentic-analytics**: An AI-driven paradigm where autonomous agents construct queries, analyze data, and execute workflows.
77. **ai-agent**: A software component that uses an LLM to reason, select tools, and interact with its environment autonomously.
78. **llm-orchestration**: The framework (e.g., LangChain, semantic routing) coordinating calls, prompts, and tools for an LLM.
79. **react-pattern**: A framework enabling LLMs to alternate between reasoning (thought) and acting (executing tools).
80. **tool-call**: An LLM-driven instruction to execute a registered function or search API with specific arguments.
81. **autonomous-query-agent**: An agent specialized in translating natural language queries into optimized SQL plans.
82. **multi-agent-system**: A cooperative architecture where specialized agents interact to solve complex analytical workflows.
83. **guardrails-ai**: Validation layers that filter inputs and outputs to prevent harmful, out-of-bounds, or hallucinated responses.
84. **conversational-bi**: Querying and visualizing business data using conversational natural language interfaces.
85. **autonomous-workflow**: An end-to-end operational process executed by agents without human intervention.
86. **ai-ready-data**: Data structured, annotated, and governed specifically to be consumable by LLMs and analytical agents.
87. **query-plan-optimization**: The process of selecting the most efficient query execution strategy across distributed engines.
88. **hallucination-mitigation**: Methods (such as prompt constraints or RAG grounding) used to minimize false model assertions.
89. **human-in-the-loop**: Incorporating human review steps in autonomous agent loops for verification or safety.
90. **semantic-agent**: An AI agent that leverages a semantic layer to understand database business definitions and schemas.
91. **agentic-rag**: An advanced RAG pattern where agents dynamically plan, refine, and query databases for context retrieval.
92. **short-term-memory**: Transient context stored during a single conversation thread to maintain dialogue state.
93. **long-term-memory**: Persistent memory storing user preferences, history, and patterns across distinct sessions.
94. **execution-loop**: The repeating cycle of sensing, reasoning, acting, and evaluating performed by an autonomous agent.
95. **dremio**: A unified data lakehouse platform that provides query virtualization, high-speed execution, and a semantic layer.
96. **query-virtualization**: Accessing and querying data across multiple heterogeneous sources without moving or replicating it.
97. **dremio-reflections**: Pre-computed data structures in Dremio that accelerate query performance transparently using Arrow.
98. **arrow-flight**: A high-performance protocol based on Apache Arrow designed for high-throughput distributed data transfer.
99. **query-federation**: Executing a single query that joins data located across multiple distinct databases or data sources.
100. **pushdown-query**: Offloading query processing operations (like filters and aggregations) to the underlying source database.
