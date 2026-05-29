interface PageHeaderProps {
  overline?: string;
  heading:   string;
  subtitle?: string;
}

export default function PageHeader({ overline, heading, subtitle }: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="page-header-bg" aria-hidden="true" />
      <div className="container page-header-body">
        {overline && <span className="overline">{overline}</span>}
        <h1 className="page-header-title serif">{heading}</h1>
        {subtitle && <p className="page-header-sub">{subtitle}</p>}
        <span className="gold-bar" style={{ margin: "1.5rem auto 0" }} aria-hidden="true" />
      </div>
    </section>
  );
}
