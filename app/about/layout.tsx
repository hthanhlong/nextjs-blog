export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section lang="en">
      <div>layout about</div>
      <div>{children}</div>
    </section>
  );
}
