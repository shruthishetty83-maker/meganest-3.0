interface LoadingSkeletonProps {
  variant?: 'product' | 'text' | 'card' | 'hero';
  count?: number;
}

export default function LoadingSkeleton({ variant = 'card', count = 1 }: LoadingSkeletonProps) {
  const skeletons = Array.from({ length: count });
  
  if (variant === 'product') {
    return (
      <>
        {skeletons.map((_, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-soft border border-neutral-100 animate-pulse">
            <div className="aspect-square bg-neutral-200" />
            <div className="p-4 space-y-3">
              <div className="h-3 bg-neutral-200 rounded w-1/3" />
              <div className="h-4 bg-neutral-200 rounded w-3/4" />
              <div className="h-4 bg-neutral-200 rounded w-1/2" />
              <div className="flex justify-between items-center">
                <div className="h-6 bg-neutral-200 rounded w-1/4" />
                <div className="h-10 w-10 bg-neutral-200 rounded-xl" />
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
  
  if (variant === 'hero') {
    return (
      <div className="w-full h-[500px] bg-neutral-200 rounded-3xl animate-pulse" />
    );
  }
  
  if (variant === 'text') {
    return (
      <div className="space-y-2 animate-pulse">
        {skeletons.map((_, i) => (
          <div key={i} className="h-4 bg-neutral-200 rounded w-full" />
        ))}
      </div>
    );
  }
  
  return (
    <>
      {skeletons.map((_, i) => (
        <div key={i} className="bg-white rounded-2xl p-6 shadow-soft border border-neutral-100 animate-pulse">
          <div className="space-y-3">
            <div className="h-4 bg-neutral-200 rounded w-3/4" />
            <div className="h-4 bg-neutral-200 rounded w-1/2" />
            <div className="h-4 bg-neutral-200 rounded w-5/6" />
          </div>
        </div>
      ))}
    </>
  );
}
