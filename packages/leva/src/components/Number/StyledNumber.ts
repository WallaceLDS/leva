import { styled } from '../../styles'

export const InnerNumberLabel = styled('div', {
  $draggable: '',
  cursor: 'ew-resize',
})

export const RangeGrid = styled('div', {
  variants: {
    hasRange: {
      true: {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'auto $sizes$numberInputMinWidth',
        columnGap: '$colGap',
        alignItems: 'center',
      },
    },
  },
})
