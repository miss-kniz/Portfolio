type RouteLoadingScreenProps = {
  title: string;
  subtitle: string;
};

export default function RouteLoadingScreen({
  title,
  subtitle,
}: RouteLoadingScreenProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(123,44,191,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(123,44,191,0.12),_transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-primary-dark/10 blur-3xl animate-pulse [animation-delay:650ms]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-10">
        <div className="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/15 bg-white/70 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
              Preparing your next case study
            </div>

            <div className="space-y-4 max-w-2xl">
              <div className="h-14 w-4/5 rounded-full bg-black/5 dark:bg-white/10 animate-pulse" />
              <div className="h-10 w-3/5 rounded-full bg-black/5 dark:bg-white/10 animate-pulse [animation-delay:120ms]" />
              <div className="h-5 w-full rounded-full bg-black/5 dark:bg-white/10 animate-pulse [animation-delay:240ms]" />
              <div className="h-5 w-11/12 rounded-full bg-black/5 dark:bg-white/10 animate-pulse [animation-delay:360ms]" />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-3 rounded-full border border-white/50 bg-white/65 px-4 py-3 shadow-sm backdrop-blur-md">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="h-4 w-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{title}</p>
                  <p className="text-xs text-black-light">{subtitle}</p>
                </div>
              </div>
              <div className="h-2 w-20 rounded-full bg-primary/15 overflow-hidden">
                <div className="h-full w-1/2 rounded-full bg-primary animate-loading-bar-long" />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-primary-dark/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/55 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.09)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center justify-between pb-4">
                <div className="space-y-2">
                  <div className="h-4 w-28 rounded-full bg-black/5 dark:bg-white/10 animate-pulse" />
                  <div className="h-3 w-40 rounded-full bg-black/5 dark:bg-white/10 animate-pulse [animation-delay:120ms]" />
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/45 animate-pulse" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/30 animate-pulse [animation-delay:140ms]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/20 animate-pulse [animation-delay:280ms]" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-72 rounded-[1.5rem] bg-gradient-to-br from-black/5 via-black/3 to-black/5 dark:from-white/10 dark:via-white/5 dark:to-white/10 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.32)_35%,transparent_70%)] animate-shimmer" />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="h-24 rounded-2xl bg-black/5 dark:bg-white/10 animate-pulse [animation-delay:140ms]" />
                  <div className="h-24 rounded-2xl bg-black/5 dark:bg-white/10 animate-pulse [animation-delay:280ms]" />
                </div>

                <div className="rounded-2xl border border-primary/10 bg-primary/5 px-4 py-3">
                  <div className="h-3 w-40 rounded-full bg-black/5 dark:bg-white/10 animate-pulse" />
                  <div className="mt-3 h-2 w-full rounded-full bg-primary/15 overflow-hidden">
                    <div className="h-full w-2/5 rounded-full bg-primary animate-loading-bar-medium" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
