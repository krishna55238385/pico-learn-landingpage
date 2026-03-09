'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#050508', color: '#fafafa', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div style={{ textAlign: 'center', maxWidth: 400 }}>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Something went wrong</h1>
            <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>{error.message}</p>
            <button
              onClick={() => reset()}
              style={{
                marginTop: 16,
                padding: '8px 16px',
                borderRadius: 8,
                background: 'rgba(255,255,255,0.1)',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontSize: 14,
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
