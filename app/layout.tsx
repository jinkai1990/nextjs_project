
import '@/app/ui/global.css'; // 通过导航到/app/layout，为你的应用添加全局样式。并导入global.css文件:
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
