export function Explore() {
  return (
    <div className="relative flex flex-1 flex-col">
      <div className="flex flex-1 items-center justify-center px-10.5 text-center">
        <p
          className="text-center align-middle font-inter font-normal text-base text-secondary tracking-normal"
          style={{ lineHeight: '100%' }}
        >
          A quick way to explore how you react to real-life scenarios—so you can
          build self-awareness and emotional insight, one moment at a time.
        </p>
      </div>

      {/* TODO: Add the behavior of explorer button -> Like situations and topics */}
      <div className="-translate-x-1/2 absolute bottom-6 left-1/2">
        <button
          aria-label="Begin exploring real-life scenarios to build self-awareness"
          className="flex h-14 w-[361px] items-center justify-center rounded-full bg-zinc-800 px-8 py-1 transition-all hover:bg-zinc-700 active:scale-[0.98]"
          style={{ gap: '8px' }}
          type="button"
        >
          <span
            className="font-inter font-medium text-base text-teal-300 tracking-normal"
            style={{ lineHeight: '14px' }}
          >
            Start exploring
          </span>
        </button>
      </div>
    </div>
  )
}
