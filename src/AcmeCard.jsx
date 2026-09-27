import React from 'react';

// Base card component for the Acme widget library.
export function AcmeCard({ title, body }) {
  return (
    <div className="acme-card">
      <h3 className="acme-card__title">{title}</h3>
      <div className="acme-card__body">{body}</div>
    </div>
  );
}

export function AcmeBadge({ status }) {
  return <span className={`acme-badge acme-badge--${status}`}>{status}</span>;
}

export function AcmeSpinner() {
  return <div className="acme-spinner" aria-label="loading" />;
}
