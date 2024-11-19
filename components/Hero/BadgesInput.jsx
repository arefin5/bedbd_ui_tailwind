import InputCheckBox from '/components/InputCheckBox'

export default function BadgesInput({mapData}) {
  return (
    <div className={`${mapData['isMapOpen'] 
                        ? '' 
                        : 'md:hidden'} space-y-2 px-6 md:px-0`}>
        <h3 className='text-neutral-500 text-lg font-semibold'>Badge</h3>
        <ul className='space-y-4'>
            <li>
                <InputCheckBox
                    genere='badge'
                    id='recommended'
                    name='badges'
                    txt='Recommended by bedbd'
                    value='recommended' />
            </li>
            <li>
                <InputCheckBox
                    genere='badge'
                    id='lorem'
                    name='badges'
                    txt='Lorem Badge'
                    value='lorem' />
            </li>
        </ul>
    </div>
  )
}