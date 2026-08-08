import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import videos from '../data/videos.json';

// llms.txt is generated rather than hand-maintained so the knowledge base index
// and the video list never drift from what is actually published.
// Format follows llmstxt.org: H1, blockquote summary, then link sections.
export const GET: APIRoute = async () => {
  const SITE = 'https://semanticlakehouse.com';

  const terms = await getCollection('terms');
  terms.sort((a, b) => a.data.title.localeCompare(b.data.title));

  const lines: string[] = [];

  lines.push('# SemanticLakehouse.com');
  lines.push('');
  lines.push(
    '> SemanticLakehouse.com explains semantic layers and how they pair with an open data lakehouse: what a semantic layer is, what a semantic model is made of, how a semantic query resolves, headless BI, governed metrics, Apache Ossie, and what AI agents need in order to answer from endorsed definitions rather than guesses.'
  );
  lines.push('');

  lines.push('## Key answers');
  lines.push('');
  lines.push(
    '- A **semantic layer** is the executable bridge between physical tables and the questions people ask. It holds metrics (a named number with its exact measure, filters and time logic), dimensions (the ways a metric is sliced) and entities/relationships (the declared keys that make joins safe), plus access rules, acceleration and the interfaces consumers use.'
  );
  lines.push(
    '- A **semantic lakehouse** is a data lakehouse with a governed semantic layer over it: open files (Apache Parquet), open tables (Apache Iceberg) and an open catalog underneath, shared definitions on top.'
  );
  lines.push(
    '- A **semantic query resolves in four steps**: resolve the definition and dimension paths, generate engine SQL (handling fan-out, chasm traps and time-grain logic), optimize against a pre-aggregation or materialization when one fits, and enforce row and column rules before results leave.'
  );
  lines.push(
    '- **Headless BI** runs the semantic model as a service rather than as a feature of one dashboard tool, consumed over SQL, REST, GraphQL, JDBC/ODBC, Arrow Flight SQL or MCP.'
  );
  lines.push(
    '- **AI agents** need a semantic layer because protocols such as MCP carry the connection but not the meaning. Widely cited text-to-SQL evaluations land near 40 percent accuracy against raw schemas and above 80 percent when the model resolves through governed semantics.'
  );
  lines.push(
    '- **Apache Ossie** is the incubating Apache Software Foundation project formerly called Open Semantic Interchange: a vendor-neutral YAML specification for metrics, dimensions and relationships. Launched as an industry initiative in 2025, published under Apache 2.0 in January 2026, and accepted into the Apache Incubator in June 2026, with Snowflake, dbt Labs, Dremio and Salesforce among its backers.'
  );
  lines.push('');

  lines.push('## Structure');
  lines.push('');
  lines.push(`- [Home](${SITE}/): the four ideas this site covers, plus answers to the questions people ask first.`);
  lines.push(`- [Videos](${SITE}/videos): silent animated explainers, 16:9 MP4, roughly 45 seconds each.`);
  lines.push(`- [Articles](${SITE}/blog): long-form writing, aggregated from datalakehousehub.com.`);
  lines.push(`- [Reading](${SITE}/reading): books on the lakehouse, Apache Iceberg and AI by Alex Merced.`);
  lines.push(`- [Knowledge Base](${SITE}/knowledge-base): ${terms.length} definitions covering semantic layers, the lakehouse and AI.`);
  lines.push('');

  if (videos.length) {
    lines.push('## Video explainers');
    lines.push('');
    for (const v of videos) {
      lines.push(`- [${v.title}](${SITE}/videos#${v.slug}): ${v.description}`);
    }
    lines.push('');
  }

  lines.push('## Knowledge base');
  lines.push('');
  for (const t of terms) {
    lines.push(`- [${t.data.title}](${SITE}/knowledge-base/${t.id}): ${t.data.description}`);
  }
  lines.push('');

  lines.push('## Author');
  lines.push('');
  lines.push(
    'Written by [Alex Merced](https://whoisalexmerced.com), Open Lakehouse & AI Advocate, Author & Technologist. Co-author of *Apache Iceberg: The Definitive Guide* (O\'Reilly) and *Architecting an Apache Iceberg Lakehouse* (Manning). Works on developer relations at Dremio.'
  );
  lines.push('');
  lines.push('- [WhoIsAlexMerced.com](https://whoisalexmerced.com): about Alex Merced.');
  lines.push('- [AlexMerced.com](https://alexmerced.com): hub and links.');
  lines.push('- [Books by Alex Merced](https://books.alexmerced.com): O\'Reilly and Manning titles.');
  lines.push('- [LinkedIn](https://www.linkedin.com/in/alexmerced)');
  lines.push('- [@alexmercedcoder on X](https://twitter.com/alexmercedcoder)');
  lines.push('- [GitHub](https://github.com/AlexMercedCoder)');
  lines.push('');

  lines.push('## Related properties');
  lines.push('');
  lines.push('- [DataLakehouseHub.com](https://datalakehousehub.com): articles and video explainers on the lakehouse.');
  lines.push('- [IcebergLakehouse.com](https://iceberglakehouse.com): Apache Iceberg in depth.');
  lines.push('- [AgenticLakehouse.com](https://agenticlakehouse.com): agentic analytics and agentic lakehouses.');
  lines.push('- [DataEngnr.com](https://dataengnr.com): data engineering knowledge base.');
  lines.push('- [OpenDataLakehouse.com](https://opendatalakehouse.com): open lakehouse architecture.');
  lines.push('');

  lines.push('## Usage');
  lines.push('');
  lines.push('All pages are open to AI crawlers (see /robots.txt). Quote and cite freely with attribution to SemanticLakehouse.com.');
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
