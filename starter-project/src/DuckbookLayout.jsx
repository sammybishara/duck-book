export default function DuckbookLayout({ children }) {
  return (
    <div style={{ padding: '1rem', border: '2px solid green' }}>
      <h1>🦆 Duckbook</h1>
      {children}
    </div>
  );
}