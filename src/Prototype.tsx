import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { prototype as copy } from "./data";

type View = (typeof copy.tabs)[number]["id"];

function EvidenceDisclosure({ title, text }: { title: string; text: string }) {
  return (
    <details className="prototype-disclosure">
      <summary>{title}</summary>
      <p>{text}</p>
    </details>
  );
}

function AnalysisView() {
  return (
    <>
      <div className="prototype-metrics">
        {copy.analysis.metrics.map((metric) => (
          <article className="prototype-metric" key={metric}>
            <h4>{metric}</h4>
            <div className="prototype-metric-value">{copy.emptyValue}</div>
            <div className="prototype-metric-changes">
              <span>{copy.labels.qoq} <strong>{copy.emptyValue}</strong></span>
              <span>{copy.labels.yoy} <strong>{copy.emptyValue}</strong></span>
            </div>
            <dl className="prototype-metadata">
              <div><dt>{copy.labels.unit}</dt><dd>{copy.labels.unconfirmed}</dd></div>
              <div><dt>{copy.labels.period}</dt><dd>{copy.labels.notSelected}</dd></div>
              <div><dt>{copy.labels.source}</dt><dd>{copy.labels.unlinked}</dd></div>
            </dl>
          </article>
        ))}
      </div>
      <div className="prototype-analysis-grid">
        <article className="prototype-card prototype-trend">
          <h4>{copy.analysis.trendTitle}</h4>
          <p>{copy.analysis.trendDescription}</p>
          <div className="prototype-chart">
            <div className="prototype-chart-grid" aria-hidden="true" />
            <div className="prototype-chart-empty">
              <span className="prototype-chart-symbol" aria-hidden="true">{copy.emptyValue}</span>
              <strong>{copy.pending}</strong>
              <span>{copy.analysis.trendEmpty}</span>
            </div>
          </div>
          <p className="prototype-chart-axis">{copy.analysis.axisLabel}</p>
        </article>
        <div className="prototype-comparisons">
          {copy.analysis.comparisons.map((comparison) => (
            <article className="prototype-card" key={comparison.title}>
              <span className="prototype-label">{comparison.label}</span>
              <h4>{comparison.title}</h4>
              <p>{comparison.text}</p>
              <span className="prototype-empty-status">{copy.pending}</span>
            </article>
          ))}
        </div>
      </div>
      <EvidenceDisclosure {...copy.analysis.disclosure} />
    </>
  );
}

function RiskView() {
  return (
    <>
      <div className="prototype-risk-grid">
        {copy.risk.categories.map((risk, index) => (
          <article className="prototype-card prototype-risk-card" key={risk.name}>
            <div className="prototype-risk-heading">
              <span className="prototype-index" aria-hidden="true">0{index + 1}</span>
              <h4>{risk.name}</h4>
            </div>
            <dl className="prototype-risk-fields">
              <div><dt>{copy.labels.grade}</dt><dd><span className="prototype-status">{copy.labels.notAssessed}</span></dd></div>
              <div><dt>{copy.labels.explanation}</dt><dd>{risk.text}</dd></div>
              <div><dt>{copy.labels.evidence}</dt><dd>{copy.labels.noEvidence}</dd></div>
              <div><dt>{copy.labels.review}</dt><dd>{copy.labels.reviewPending}</dd></div>
            </dl>
          </article>
        ))}
      </div>
      <EvidenceDisclosure {...copy.risk.disclosure} />
    </>
  );
}

function ReportView() {
  return (
    <>
      <article className="prototype-report">
        <header className="prototype-report-header">
          <span className="prototype-label">{copy.report.templateLabel}</span>
          <h4>{copy.report.documentTitle}</h4>
          <span className="prototype-status">{copy.report.status}</span>
          <p>{copy.report.emptyNote}</p>
        </header>
        <ol className="prototype-report-sections">
          {copy.report.sections.map((section, index) => (
            <li key={section.title}>
              <span className="prototype-index" aria-hidden="true">0{index + 1}</span>
              <div><h5>{section.title}</h5><p>{section.text}</p></div>
            </li>
          ))}
        </ol>
      </article>
      <EvidenceDisclosure {...copy.report.disclosure} />
    </>
  );
}

export default function Prototype() {
  const [view, setView] = useState<View>("analysis");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = copy[view];

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const count = copy.tabs.length;
    let next: number;
    switch (event.key) {
      case "ArrowRight": next = (index + 1) % count; break;
      case "ArrowLeft": next = (index - 1 + count) % count; break;
      case "Home": next = 0; break;
      case "End": next = count - 1; break;
      default: return;
    }
    event.preventDefault();
    setView(copy.tabs[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <section className="prototype-section container section-space" id="prototype" aria-labelledby="prototype-title">
      <div className="section-heading reveal">
        <div className="section-kicker"><span>05</span><span>{copy.kicker}</span></div>
        <h2 id="prototype-title">{copy.heading}</h2>
        <p>{copy.introduction}</p>
      </div>
      <div className="prototype-window">
        <div className="prototype-window-bar">
          <span className="prototype-label">{copy.workspace}</span>
          <span className="prototype-concept">{copy.conceptLabel}</span>
        </div>
        <div className="prototype-context">
          <dl>
            {copy.context.map((item) => (
              <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>
            ))}
          </dl>
          <span className="prototype-status">{copy.status}</span>
        </div>
        <div className="prototype-workflow">
          <span className="prototype-label">{copy.workflowLabel}</span>
          <ol>{copy.workflow.map((step) => <li key={step}>{step}</li>)}</ol>
        </div>
        <div className="prototype-tabs" role="tablist" aria-label={copy.tabsLabel}>
          {copy.tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={(element) => { tabRefs.current[index] = element; }}
              type="button"
              role="tab"
              id={`prototype-tab-${tab.id}`}
              aria-controls={`prototype-panel-${tab.id}`}
              aria-selected={view === tab.id}
              tabIndex={view === tab.id ? 0 : -1}
              onClick={() => setView(tab.id)}
              onKeyDown={(event) => navigate(event, index)}
            >
              <span aria-hidden="true">{tab.number}</span>{tab.label}
            </button>
          ))}
        </div>
        {copy.tabs.map((tab) => (
          <div
            key={tab.id}
            id={`prototype-panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`prototype-tab-${tab.id}`}
            tabIndex={0}
            hidden={view !== tab.id}
            className="prototype-panel"
          >
            {view === tab.id && (
              <>
                <div className="prototype-view-heading"><h3>{current.title}</h3><p>{current.description}</p></div>
                {view === "analysis" ? <AnalysisView /> : view === "risk" ? <RiskView /> : <ReportView />}
              </>
            )}
          </div>
        ))}
        <p className="prototype-notice">{copy.notice}</p>
      </div>
      <p className="prototype-provenance">{copy.provenance.publicNote}</p>
    </section>
  );
}
