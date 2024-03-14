import DashboardSkeleton from '@/app/ui/skeletons';
export default function Loading() { // 进入页面时显示的骨架屏，不用等待接口完全加载完菜显示页面，在相应的目录价loading.tsx文件
  return <DashboardSkeleton/>;
}