import Link from "next/link";
import { notFound } from "next/navigation";
import experiments from "@/data/experiments.json";

export function generateStaticParams() {
  return experiments.map(({ slug }) => ({ slug }));
}

export default async function ExperimentPage({ params }) {
  const { slug } = await params;
  const experiment = experiments.find((item) => item.slug === slug);

  if (!experiment) notFound();

  return (
    <main className="viewer">
      <header className="viewerBar">
        <Link className="backLink" href="/" aria-label="Back to collection">
          <span aria-hidden="true">←</span> Collection
        </Link>
        <div className="viewerTitle">
          <strong>{experiment.title}</strong>
          <span>{String(experiment.order).padStart(2, "0")} / {experiments.length}</span>
        </div>
        <a
          className="openLink"
          href={`/experiments/${experiment.slug}/index.html`}
          target="_blank"
          rel="noreferrer"
        >
          Open full screen ↗
        </a>
      </header>
      {experiment.status === "ready" ? (
        <iframe
          className="experimentFrame"
          src={`/experiments/${experiment.slug}/index.html`}
          title={experiment.title}
          allow="autoplay; fullscreen; accelerometer; gyroscope"
        />
      ) : (
        <section className="buildError">
          <p>Experiment source found, but its standalone build failed.</p>
          <code>{experiment.error || "Unknown build error"}</code>
        </section>
      )}
    </main>
  );
}
