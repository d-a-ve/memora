import React from 'react'
import { DatePickerComponent } from '../../../../components/Date'

export function DashboardBirthdayCalender() {
  return (
    <div>
      <DatePickerComponent isReadOnly={true} inline={true}/>
    </div>
  )
}
