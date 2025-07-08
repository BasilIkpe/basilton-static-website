export const productImages = {
  attendance_tracking: '/assets/images/products/attendance_tracking.png',
  finance: '/assets/images/products/finance.png',
  mobile_access: '/assets/images/products/mobile_access.png',
  contact_management: '/assets/images/products/contact_management.png',
  reimbursement: '/assets/images/products/reimbursement.png',
  online_giving: '/assets/images/products/online_giving.png',
  donation_management: '/assets/images/products/donation_management.png',
  service_planning: '/assets/images/products/service_planning.png',
  attendance_analytics: '/assets/images/products/attendance_analytics.png',
  cell_management: '/assets/images/products/cell_management.png',
  assets_management: '/assets/images/products/asset_management.png',
  member_communication: '/assets/images/products/member_communication.png',
  event_planning: '/assets/images/products/event_planning.png',
  leave_management: '/assets/images/products/leave_management.png',
  bulk_sms: '/assets/images/products/bulk_sms.png',
  member_directory: '/assets/images/products/member_directory.png',
  variance: '/assets/images/products/variance.png',
  appointment_scheduler: '/assets/images/products/appointment_scheduler.png',
  integration: '/assets/images/products/integration.png',
  membership_management: '/assets/images/products/membership_management.png',
  follow_up: '/assets/images/products/follow_up.png',
  space_booking: '/assets/images/products/space_booking.png',
  organogram: '/assets/images/products/organogram.png',
}

export const products = [
  {
    title: 'Attendance Tracking',
    img: productImages.attendance_tracking,
    desc: {
      features: 'Record attendance for services, events, classes, and meetings.',
      Scenario:
        'Members can check-in for services using a mobile app, and church admins can track attendance trends over time',
    },
  },
  {
    title: 'Contact Management',
    img: productImages.contact_management,
    desc: {
      features:
        'Organize member contacts. Categorize by roles/groups. Track communication history.',
      Scenario:
        'Members can update their contact information through a web portal, and administrators can easily access and manage contact details for effective communication.',
    },
  },
  {
    title: 'Finance',
    img: productImages.finance,
    desc: {
      features: 'Record transactions, Generate financial reports, Budget tracking.',
      Scenario:
        'Treasurers can input donation details, track expenses, and generate financial reports for transparent and accountable financial management.',
    },
  },
  {
    title: 'Mobile Access',
    img: productImages.mobile_access,
    desc: {
      features: 'Mobile app for on-the-go, Responsive design, Push notifications.',
      Scenario:
        'Members can access event details, receive notifications, and make contributions through a mobile app, enhancing engagement and convenience.',
    },
  },

  {
    title: 'Donation Management',
    img: productImages.donation_management,
    desc: {
      features: 'Track donations, Generate tax receipts, Recurring donations',
      Scenario:
        'Donors can easily contribute online, view their donation history, and receive automated tax receipts for their records.',
    },
  },
  {
    title: 'Online Giving',
    img: productImages.online_giving,
    desc: {
      features: 'Secure online platform, Multiple payment options, Integrated with finance.',
      Scenario:
        ' Members and supporters can make quick and secure online donations, improving the efficiency of the giving process.',
    },
  },
  {
    title: 'Reimbursement',
    img: productImages.reimbursement,
    desc: {
      features: 'Submit requests, Approval workflow, Finance integration',
      Scenario:
        'Staff and volunteers can submit reimbursement requests through a web portal, streamlining the reimbursement process.',
    },
  },
  {
    title: 'Service Planning',
    img: productImages.service_planning,
    desc: {
      features: 'Schedule services/events, Collaborative planning, Resource allocation.',
      Scenario:
        'Service planners can coordinate seamlessly, plan events, allocate resources, and ensure everything runs smoothly.',
    },
  },
  {
    title: 'member communication',
    img: productImages.member_communication,
    desc: {
      features:
        ' Announcements, newsletters, Group-based communication, Contact management integration.',
      Scenario:
        'Administrators can send targeted messages to specific groups or the entire congregation, fostering effective communication.',
    },
  },
  {
    title: 'assets management',
    img: productImages.assets_management,
    desc: {
      features: ': Inventory tracking, Maintenance schedules, Depreciation tracking.',
      Scenario:
        "Facility managers can monitor asset status, schedule maintenance, and ensure the church's assets are well-maintained.",
    },
  },
  {
    title: 'cell management',
    img: productImages.cell_management,
    desc: {
      features: ' Small group info, Attendance tracking, Communication within cells.',
      Scenario:
        'Cell leaders can manage their group activities, track attendance, and communicate effectively with members.',
    },
  },
  {
    title: 'attendance analytics',
    img: productImages.attendance_analytics,
    desc: {
      features: 'Visualize trends, Identify peak periods, Compare attendance.',
      Scenario:
        'Administrators can analyze attendance data to optimize service planning and identify patterns in congregation participation.',
    },
  },
  {
    title: 'Member directory',
    img: productImages.member_directory,
    desc: {
      features: ': Searchable directory, Privacy settings,Contact management,integration.',
      Scenario:
        'Members can easily find and connect with each other through an online directory, fostering a sense of community',
    },
  },
  {
    title: 'Leave Management',
    img: productImages.leave_management,
    desc: {
      features: ' Submit/approve requests,Calendar integration,Track leave balances.',
      Scenario:
        'Staff and volunteers can request and manage their leaves through a centralized system, promoting efficient leave management.',
    },
  },
  {
    title: 'event planning',
    img: productImages.event_planning,
    desc: {
      features: 'Coordinate events, Manage RSVPs, Track expenses.',
      Scenario:
        'Event organizers can plan, promote, and manage events, ensuring a smooth and well-coordinated experience for attendees.',
    },
  },
  {
    title: 'bulk sms',
    img: productImages.bulk_sms,
    desc: {
      features: 'Send announcements, Segment recipients, Track delivery.',
      Scenario:
        'Administrators can quickly disseminate important information to the congregation through bulk SMS, ensuring timely communication.',
    },
  },
  {
    title: 'Membership Management',
    img: productImages.membership_management,
    desc: {
      features: ' Track membership, Renewal reminders ,Contact management integration.',
      Scenario:
        'Administrators can oversee and manage the membership lifecycle, ensuring accurate and up-to-date membership records.',
    },
  },
  {
    title: 'Variance (comparison)',
    img: productImages.variance,
    desc: {
      features: 'Compare metrics, Identify variations, Visual representation.',
      Scenario:
        ': Leadership can analyze variances in attendance, donations, or other key metrics to make informed decisions and adjustments.',
    },
  },
  {
    title: 'Appointment Scheduler',
    img: productImages.appointment_scheduler,
    desc: {
      features: 'Online scheduling, Availability calendar,Automated reminders.',
      Scenario:
        ' Members can schedule appointments with pastoral staff or leaders conveniently through an online scheduler, reducing scheduling conflicts.',
    },
  },
  {
    title: 'Third-party Integration',
    img: productImages.integration,
    desc: {
      features: 'Send announcements, Segment recipients, Track delivery.',
      Scenario:
        'Administrators can quickly disseminate important information to the congregation through bulk SMS, ensuring timely communication.',
    },
  },
  {
    title: 'Follow up',
    img: productImages.follow_up,
    desc: {
      features: ' Automated workflows,Track follow-ups,Communication tool integration.',
      Scenario:
        'Leadership and volunteers can follow up with new attendees or members, ensuring they feel welcomed and connected to the community.',
    },
  },
  {
    title: 'Space Booking',
    img: productImages.space_booking,
    desc: {
      features: 'Reserve facilities,Manage availability,Automated confirmation.',
      Scenario:
        'Members or external groups can request and book church facilities for their events, streamlining the space reservation process.',
    },
  },
  {
    title: 'Organogram',
    img: productImages.organogram,
    desc: {
      features: ' Visual church structure,Interactive hierarchy,Contact management integration.',
      Scenario:
        " Members can view and understand the church's organizational structure through an interactive organogram, fostering clarity in roles and responsibilities.",
    },
  },
]
