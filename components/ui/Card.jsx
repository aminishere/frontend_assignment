export default function Card({ children, className = "" }) {
  return (
    <div className={`rounded-l bg-white p-4 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
