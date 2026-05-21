---
title: "Tool Call"
description: "An LLM-driven instruction to execute a registered function or search API with specific arguments."
related: ["ai-agent", "react-pattern", "llm-orchestration"]
---

**Tool Call** is the programmatic mechanism where a large language model decides to execute a registered function, API request, or database query rather than generating standard text. It allows models to interact with external systems.

## How it Works

A tool call bridges the gap between text generation and code execution.

- **Function Registration**: The orchestrator presents the LLM with a list of available tools, including their names, descriptions, and expected parameters in a JSON schema.
- **Model Output**: When the model requires external data, it outputs a structured payload (usually JSON) containing the tool name and argument values (e.g., `execute_sql(query="SELECT * FROM table")`).
- **Orchestrator Execution**: The application parses the model's output, runs the corresponding function, and returns the output to the model context.

## Lakehouse & Agentic Relevance

In a data lakehouse, AI agents use tool calls to perform operations on database tables. For instance, the agent makes a tool call to run SQL queries or search metadata. Dremio acts as a primary tool endpoint for these calls. By exposing a high-speed JDBC/ODBC or Arrow Flight interface, Dremio allows orchestrators to execute tool calls on behalf of the agent, delivering query results back to the model within milliseconds.
