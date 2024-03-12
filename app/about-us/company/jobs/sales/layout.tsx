// 중첩 레이아웃 가능

export default function SalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      $$$$$$$$
    </div>
  );
}
