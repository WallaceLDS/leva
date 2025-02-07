import React, { useRef } from 'react'
import { RangeWrapper, Range, Scrubber, Indicator } from './StyledRange'
import { InternalNumberSettings, sanitizeStep } from './number-plugin'
import { useDrag } from '../../hooks'
import { invertedRange, range } from '../../utils'
import { useTh } from '../../styles'

type RangeSliderProps = { value: number; onDrag: (v: number) => void } & InternalNumberSettings

export function RangeSlider({ value, min, max, onDrag, step, initialValue }: RangeSliderProps) {
  const ref = useRef<HTMLDivElement>(null)
  const scrubberRef = useRef<HTMLDivElement>(null)
  const rangeWidth = useRef<number>(0)
  const scrubberWidth = useTh('sizes', 'scrubberWidth')

  const bind = useDrag(({ event, first, xy: [x], movement: [mx], memo }) => {
    if (first) {
      // rangeWidth is the width of the slider el minus the width of the scrubber el itself
      const { width, left } = ref.current!.getBoundingClientRect()
      rangeWidth.current = width - parseFloat(scrubberWidth)

      const targetIsScrub = event?.target === scrubberRef.current
      // memo is the value where the user clicked on
      memo = targetIsScrub ? value : invertedRange((x - left) / width, min, max)
    }
    const newValue = memo + invertedRange(mx / rangeWidth.current, 0, max - min)
    onDrag(sanitizeStep(newValue, { step, initialValue }))
    return memo
  })

  const pos = range(value, min, max)

  return (
    <RangeWrapper ref={ref} {...bind()}>
      <Range>
        <Indicator style={{ left: 0, right: `calc(${1 - pos} * (100% - ${scrubberWidth}))` }} />
      </Range>
      <Scrubber ref={scrubberRef} style={{ left: `calc(${pos} * (100% - ${scrubberWidth}))` }} />
    </RangeWrapper>
  )
}
