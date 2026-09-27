import Image from "next/image"

type BicycleLoaderProps = {
  message?: string
}

export function BicycleLoader({ message = "Loading experience..." }: BicycleLoaderProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 text-foreground backdrop-blur-md transition-colors"
      role="status"
      aria-live="polite"
      aria-label={message}
    >
      <div className="flex w-full max-w-[760px] flex-col items-center px-6">
        <div className="relative w-full max-w-[560px]">
          <div className="bicycle-loader-ride">
            <Image
              src="/bicycle-loader.png"
              alt=""
              width={1009}
              height={589}
              priority
              className="h-auto w-full select-none drop-shadow-[0_10px_30px_rgba(74,29,150,0.3)] dark:drop-shadow-[0_10px_30px_rgba(0,212,255,0.25)]"
              draggable={false}
            />
          </div>

          <div className="bicycle-loader-road !bg-[linear-gradient(90deg,transparent,#00D4FF_14%,#4A1D96_86%,transparent)]" aria-hidden="true" />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-center text-xs font-semibold tracking-[0.16em] text-primary dark:text-cyan-400 uppercase sm:text-sm sm:tracking-[0.22em]">
          <span className="gradient-text">{message}</span>
          <span className="bicycle-loader-dots text-primary dark:text-cyan-400" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </div>
      </div>
    </div>
  )
}
