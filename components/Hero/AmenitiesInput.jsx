import InputCheckBox from '/components/InputCheckBox'

export default function AmenitiesInput({mapData}) {
  return (
    <div className={`${mapData['isMapOpen'] 
                            ? '' 
                            : 'md:hidden'} space-y-2 px-6 md:px-0`}>
        <h3 className='text-neutral-500 text-lg font-semibold'>Amenities</h3>
        <ul className="space-y-4">
            <li>
                <InputCheckBox
                    genere='amenity'
                    id='food_court'
                    name='amenities'
                    txt='Food Court'
                    value='food_court' />
            </li>
            <li>
                <InputCheckBox
                    genere='amenity'
                    id='parking_area'
                    name='amenities'
                    txt='Parking Area'
                    value='parking_area' />
            </li>
            <li>
                <InputCheckBox
                    genere='amenity'
                    id='wifi'
                    name='amenities'
                    txt='Wifi'
                    value='wifi' />
            </li>
        </ul>
    </div>
  )
}
