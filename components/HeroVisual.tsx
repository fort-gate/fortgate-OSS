import Icon from "@/components/ui/Icon";

function PlatformNode({ label }: { label: string }) {
  return (
    <div className="rounded-[12px] border border-border bg-surface-3 p-3">
      <div className="flex items-center gap-2">
        <Icon name="building" size={16} className="text-text-muted" />
        <span className="truncate text-label font-medium text-text-primary">
          {label}
        </span>
      </div>
      <div className="mt-2 inline-flex items-center gap-1 text-label text-accent-violet">
        <Icon name="check" size={13} />
        <span className="text-text-muted">Reused · no re-check</span>
      </div>
    </div>
  );
}

/**
 * Hero visual — a concrete product diagram (not an abstract orb): one verified
 * identity fans out, reused across multiple regulated platforms.
 */
export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[460px]">
      {/* soft ambient wash, kept subtle */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-accent-violet/[0.07] blur-[90px]"
      />

      <div className="rounded-card border border-border bg-surface-2 p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
        {/* Verified identity node */}
        <div className="rounded-[14px] border border-hairline bg-surface-3 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-accent-violet/15 text-accent-violet">
                <Icon name="shield-check" size={20} />
              </span>
              <div>
                <p className="text-label font-semibold text-text-primary">
                  Identity verified
                </p>
                <p className="text-label text-text-muted">Cleared · biometrics bound</p>
              </div>
            </div>
            <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-accent-blue">
              ZK proof
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
            <Icon name="lock" size={13} className="text-text-muted" />
            <span className="font-mono text-[12px] text-text-muted">
              proof · 0x7f3a…c21e · anchored on-chain
            </span>
          </div>
        </div>

        {/* One-to-many connector bus */}
        <svg
          viewBox="0 0 300 44"
          preserveAspectRatio="none"
          className="h-11 w-full text-text-muted/30"
          aria-hidden
        >
          <path
            d="M150 0 V22 M50 22 H250 M50 22 V44 M150 22 V44 M250 22 V44"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>

        {/* Reused across platforms */}
        <div className="grid grid-cols-3 gap-3">
          <PlatformNode label="Platform" />
          <PlatformNode label="Platform" />
          <PlatformNode label="Platform" />
        </div>
      </div>

      {/* caption */}
      <p className="mt-4 text-center text-label text-text-muted">
        One verification, reused everywhere — no data re-exposed.
      </p>
    </div>
  );
}
