import React from 'react'
import GetInvolvedVolunteer from '../../component/get-involved-volunteer/GetInvolvedVolunteer'
import GetInvolvedOther from '../../component/get-involved-other/GetInvolvedOther'
import GetInvoledCTA from '../../component/get-involved-cta/GetInvoledCTA'

const GetInvolved = () => {
  return (
    <main>
      <GetInvolvedVolunteer />
      <GetInvolvedOther />
      <GetInvoledCTA />
    </main>
  )
}

export default GetInvolved