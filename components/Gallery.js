"use client";

import Link from "next/link";
import { useDeferredValue, useState } from "react";

export default function Gallery({ experiments }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const filtered = experiments.filter(({ title, kind }) =>
    `${title} ${kind}`.toLowerCase().includes(deferredQuery),
  );

  return (
    <main className="collection">
      <header className="masthead">
        <div className="eyebrow"><span /> Interactive archive, 2026</div>
        <h1>Codegrid<br /><i>Collection</i></h1>
        <div className="mastheadMeta">
          <p>One Next.js app.<br />Every interface, animation, and asset.</p>
          <strong>{experiments.length}</strong>
          <span>Experiments</span>
        </div>
      </header>

      <section className="catalog">
        <div className="catalogTools">
          <label htmlFor="search">Index / Search</label>
          <input
            id="search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filter the archive"
          />
          <span>{filtered.length} results</span>
        </div>

        <div className="experimentList">
          {filtered.map((experiment) => (
            <Link
              className={`experimentRow ${experiment.status !== "ready" ? "unavailable" : ""}`}
              href={`/experiments/${experiment.slug}`}
              key={experiment.slug}
            >
              <span className="rowNumber">{String(experiment.order).padStart(2, "0")}</span>
              <h2>{experiment.title}</h2>
              <span className="rowKind">{experiment.kind}</span>
              <span className="rowArrow">↗</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
