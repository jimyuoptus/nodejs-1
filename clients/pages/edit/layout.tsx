export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4">
      <header className="py-4">
        <h1 className="text-3xl font-bold">Edit Book</h1>
      </header>
      {children}
    </div>
  );
}