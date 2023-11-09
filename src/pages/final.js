import React from 'react'
import FlipClock from 'x-react-flipclock'
import './commen.css'

function final() {
  return (
    <div>
    <div className="Final">
        <div className='clock'>
            <FlipClock
                type="countdown"
                count_to="2023-11-19 14:00:00"
                units={[
                    {
                        sep: '',
                        type: 'days',
                        title: 'දින',
                    },
                    {
                        sep: ':',
                        type: 'hours',
                        title: 'පැය',
                    },
                    {
                        sep: ':',
                        type: 'minutes',
                        title: 'මිනිත්තු',
                    },
                    {
                        sep: ':',
                        type: 'seconds',
                        title: 'තත්පර',
                    },
                ]}
            />
        </div>

    </div>
</div>
  )
}

export default final