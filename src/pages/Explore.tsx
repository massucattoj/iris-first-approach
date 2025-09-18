import { Button } from '@/components/ui/button'

export function Explore() {
  return (
    <div className="relative flex flex-1 flex-col">
      <div className="flex flex-1 items-center justify-center px-10.5 text-center">
        <p
          className="text-center align-middle font-inter font-normal text-[var(--color-text-secondary)] text-base tracking-normal"
          style={{ lineHeight: '100%' }}
        >
          A quick way to explore how you react to real-life scenarios—so you can
          build self-awareness and emotional insight, one moment at a time.
        </p>
      </div>

      {/* TODO: Add the behavior of explorer button -> Like situations and topics */}
      <div className="-translate-x-1/2 absolute bottom-6 left-1/2">
        <Button
          aria-label="Begin exploring real-life scenarios to build self-awareness"
          className="h-14 w-[361px] rounded-full active:scale-[0.98]"
          size="lg"
          variant="secondary"
        >
          <span className="font-inter font-medium text-[var(--color-text-accent)] text-base">
            Start exploring
          </span>
        </Button>
      </div>
    </div>
  )
}
