type SectionSkeletonProps = {
  variant?: "cards" | "timeline" | "split" | "list"
  tone?: "background" | "muted"
  items?: number
}

function SkeletonLine({ className = "" }: { className?: string }) {
  return <div className={`skeleton-shimmer rounded-full bg-muted-foreground/10 ${className}`} />
}

function SkeletonCard() {
  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
      <div className="mb-5 flex items-start justify-between gap-4">
        <SkeletonLine className="h-12 w-12 rounded-lg" />
        <SkeletonLine className="h-6 w-24" />
      </div>
      <SkeletonLine className="mb-3 h-5 w-3/4" />
      <SkeletonLine className="mb-2 h-4 w-full" />
      <SkeletonLine className="mb-6 h-4 w-5/6" />
      <div className="space-y-3">
        <SkeletonLine className="h-3 w-2/3" />
        <SkeletonLine className="h-3 w-1/2" />
        <SkeletonLine className="h-3 w-3/5" />
      </div>
    </div>
  )
}

function HeaderSkeleton() {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <SkeletonLine className="mx-auto mb-5 h-9 w-24 rounded-lg" />
      <SkeletonLine className="mx-auto mb-4 h-9 w-4/5" />
      <SkeletonLine className="mx-auto mb-2 h-4 w-full" />
      <SkeletonLine className="mx-auto h-4 w-3/4" />
    </div>
  )
}

function TimelineSkeleton({ items }: { items: number }) {
  return (
    <div className="space-y-8">
      {Array.from({ length: items }).map((_, index) => (
        <div
          key={index}
          className={`flex flex-col items-center gap-8 lg:flex-row ${
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full lg:w-[calc(50%-4rem)]">
            <SkeletonCard />
          </div>
          <div className="hidden w-[calc(50%-4rem)] lg:block" />
        </div>
      ))}
    </div>
  )
}

function SplitSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="space-y-8">
        <div>
          <SkeletonLine className="mb-5 h-9 w-28 rounded-lg" />
          <SkeletonLine className="mb-4 h-9 w-4/5" />
          <SkeletonLine className="mb-2 h-4 w-full" />
          <SkeletonLine className="h-4 w-2/3" />
        </div>
        <SkeletonCard />
      </div>
      <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
        <SkeletonLine className="mb-8 h-12 w-3/4" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <SkeletonLine className="h-12 w-full rounded-lg" />
          <SkeletonLine className="h-12 w-full rounded-lg" />
        </div>
        <SkeletonLine className="mt-6 h-12 w-full rounded-lg" />
        <SkeletonLine className="mt-6 h-32 w-full rounded-lg" />
        <SkeletonLine className="mt-6 h-12 w-full rounded-lg" />
      </div>
    </div>
  )
}

function ListSkeleton({ items }: { items: number }) {
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} className="rounded-lg border border-border bg-card p-5">
          <SkeletonLine className="mb-3 h-5 w-4/5" />
          <SkeletonLine className="h-4 w-2/3" />
        </div>
      ))}
    </div>
  )
}

export function SectionSkeleton({
  variant = "cards",
  tone = "background",
  items = 3,
}: SectionSkeletonProps) {
  return (
    <section
      className={`skeleton-section py-24 lg:py-32 ${
        tone === "muted" ? "bg-muted/30" : "bg-background"
      }`}
      aria-hidden="true"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {variant === "split" ? (
          <SplitSkeleton />
        ) : (
          <>
            <HeaderSkeleton />
            {variant === "timeline" && <TimelineSkeleton items={items} />}
            {variant === "list" && <ListSkeleton items={items} />}
            {variant === "cards" && (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: items }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
