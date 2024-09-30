export default function getAllTimeSegment() {
    let timeSegments=[];
    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
            let h = ''
            let m = ''
            let meridiem = ''

            if(hour === 0){
                h = '12'
                meridiem = 'AM'
            } else if(hour > 12 ){
                h = (hour-12).toString()
                meridiem = 'PM'
            } else {
                h = hour.toString()
                meridiem = 'AM'
            }

            if(minute === 0 )
                m = '00'
            else
                m = minute.toString()

            timeSegments = [...timeSegments,{hour: h, minute:m, meridiem: meridiem}]
            // if(hour === 0)
            //     if(minute===0)
            //         timeSegments = [...timeSegments,{hour: '12', minute:'00', meridiem: 'AM' }]
            //     else
            //         timeSegments = [...timeSegments,{hour: '12', minute:minute, meridiem: 'AM' }]
            // else if(hour > 12 )
            //     timeSegments = [...timeSegments,{hour: hour-12, minute:minute, meridiem: 'PM' }]
            // else
            //     timeSegments = [...timeSegments,{hour: hour, minute:minute, meridiem: 'AM' }]

        }
      }
    return timeSegments
}