const Events = [
  {
    id: 1,
    name: "Music Fiesta",
    dateTime: "01/07/2025 11:00 am",
    image: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-musical-event-0-2025-4-16-t-11-28-31.jpg",
    description: "An electrifying night filled with music and fun.",
    venue: "Central Park, Delhi",
    ticketsAvailable: 206
  },
  {
    id: 2,
    name: "Art Expo",
    dateTime: "02/07/2025 3:00 pm",
    image: "https://assets-in.bmscdn.com/nmcms/desktop/media-desktop-crumble-art-2025-4-8-t-7-1-13.jpg",
    description: "Explore creative artworks from around the world.",
    venue: "Art Gallery, Mumbai",
    ticketsAvailable: 92
  },
  {
    id: 3,
    name: "Tech Conference",
    dateTime: "03/07/2025 5:00 pm",
    image: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-techno-tatva-lab-with-ashmit-patel-actor-dj-0-2025-4-15-t-13-47-55.jpg",
    description: "Discover innovations in technology and development.",
    venue: "Tech Center, Bangalore",
    ticketsAvailable: 89
  },
  {
    id: 4,
    name: "Food Carnival",
    dateTime: "04/07/2025 11:00 am",
    image: "https://creativeyatra.com/wp-content/uploads/2019/12/Food-Carnival-2019.jpg",
    description: "Taste delicacies from across the globe.",
    venue: "Downtown Plaza, Ahmedabad",
    ticketsAvailable: 240
  },
  {
    id: 5,
    name: "Book Fair",
    dateTime: "05/07/2025 6:00 pm",
    image: "https://epe.brightspotcdn.com/dims4/default/654520c/2147483647/strip/true/crop/1440x810+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.us-east-1.amazonaws.com%2Ffe%2Fb2%2F295754ed4bc28ebeeb304659f134%2F062424-book-fair-bs.jpg",
    description: "A haven for book lovers and literary enthusiasts.",
    venue: "City Library, Pune",
    ticketsAvailable: 111
  },
  {
    id: 6,
    name: "Stand-up Comedy",
    dateTime: "06/07/2025 1:00 pm",
    image: "https://img.freepik.com/free-photo/process-creating-stand-up-comedy_23-2151053485.jpg",
    description: "An evening full of laughter and fun.",
    venue: "Comedy Club, Jaipur",
    ticketsAvailable: 76
  },
  {
    id: 7,
    name: "Startup Pitch Fest",
    dateTime: "07/07/2025 3:00 pm",
    image: "https://cdn.zeebiz.com/sites/default/files/2025/02/02/349830-startup-freepik.png",
    description: "Watch budding entrepreneurs pitch their ideas.",
    venue: "Innovation Hub, Hyderabad",
    ticketsAvailable: 212
  },
  {
    id: 8,
    name: "Health & Wellness",
    dateTime: "08/07/2025 10:00 am",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_kqIh6Xwn09mH5wQ0Nd0ukrKFj7ZYVOLhg&s",
    description: "Workshops and booths on health and wellness.",
    venue: "Community Center, Chandigarh",
    ticketsAvailable: 233
  },
  {
    id: 9,
    name: "Film Festival",
    dateTime: "09/07/2025 11:00 am",
    image: "https://lingopie.com/blog/content/images/size/w1200/2024/07/IMG_4430.jpeg",
    description: "Screenings of award-winning short and feature films.",
    venue: "Cinema Hall, Lucknow",
    ticketsAvailable: 270
  },
  {
    id: 10,
    name: "Dance Gala",
    dateTime: "10/07/2025 3:00 pm",
    image: "https://now.uiowa.edu/sites/now.uiowa.edu/files/2023-04/03_DSC9240_0.jpg",
    description: "Ballet, contemporary, and cultural performances.",
    venue: "City Theater, Bhopal",
    ticketsAvailable: 120
  },
  {
    id: 11,
    name: "Photography Work",
    dateTime: "11/07/2025 1:00 pm",
    image: "https://px-web-images2.pixpa.com/xB5M4v1pCU1DyOWizUgd3-doew2js6qd_6kvlRFWGEk/rs:fit:1200:0/q:80/aHR0cHM6Ly9waXhwYWNvbS1pbWcucGl4cGEuY29tL2NvbS9hcnRpY2xlcy8xNTU5MjA4NzI0LTk2MTcyNS1kZXBvc2l0cGhvdG9zLTE2NjUwNjg5OC1sLTIwMTVqcGVnLmpwZw==",
    description: "Learn photography from top professionals.",
    venue: "Art Studio, Surat",
    ticketsAvailable: 193
  },
  {
    id: 12,
    name: "Gaming Convention",
    dateTime: "12/07/2025 2:00 pm",
    image: "https://www.greenmangaming.com/blog/wp-content/uploads/2018/09/convention-blog-890x606.jpg",
    description: "Experience the latest in gaming and tech.",
    venue: "Expo Center, Chennai",
    ticketsAvailable: 65
  },
  {
    id: 13,
    name: "Fashion Week",
    dateTime: "13/07/2025 12:00 pm",
    image: "https://fashinnovation.nyc/wp-content/uploads/2023/11/Fashion-Weeks-1024x683.jpg",
    description: "Runway shows by top designers.",
    venue: "Fashion Arena, Kolkata",
    ticketsAvailable: 113
  },
  {
    id: 14,
    name: "Charity Marathon",
    dateTime: "14/07/2025 4:00 pm",
    image: "https://www.worldvision.org.uk/media/jkeh1rii/the-back-of-a-person-running-a-marathon-in-a-group-1157429986.jpg",
    description: "Run for a cause. Open for all.",
    venue: "Lakefront Trail, Kochi",
    ticketsAvailable: 193
  },
  {
    id: 15,
    name: "Coding Bootcamp",
    dateTime: "15/07/2025 6:00 pm",
    image: "https://csweb.rice.edu/sites/g/files/bxs4941/files/2022-06/MCS%20vs%20Bootcamp_Hero_Web-min.jpg",
    description: "Level up your coding skills in 1 day.",
    venue: "Tech Campus, Nagpur",
    ticketsAvailable: 299
  },
  {
    id: 16,
    name: "Wine Tasting Evening",
    dateTime: "16/07/2025 1:00 pm",
    image: "https://www.wienscellars.com/wp-content/uploads/2024/06/960x0-1.jpg",
    description: "Sample wines from local vineyards.",
    venue: "Vineyard Estate, Nashik",
    ticketsAvailable: 237
  },
  {
    id: 17,
    name: "Yoga Retreat",
    dateTime: "17/07/2025 1:00 pm",
    image: "https://d1qzuhxpc9cpmj.cloudfront.net/images/blog/Paradis-Plage_yoga-class.jpg",
    description: "Find your balance and peace.",
    venue: "Wellness Resort, Manali",
    ticketsAvailable: 113
  },
  {
    id: 18,
    name: "Pet Adoption Drive",
    dateTime: "18/07/2025 12:00 pm",
    image: "https://sosd.org.sg/wp-content/uploads/2014/10/sosd-adoption-drive-banner-image-only1.png",
    description: "Give a furry friend a loving home.",
    venue: "Pet Park, Noida",
    ticketsAvailable: 284
  },
  {
    id: 19,
    name: "Cultural Fest",
    dateTime: "19/07/2025 12:00 pm",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtz2lcitXMr5fjY8WlXVsLvPk2mXjtKeLb4Q&s",
    description: "Celebrate cultures with food, dance, and music.",
    venue: "Riverwalk, Udaipur",
    ticketsAvailable: 103
  },
  {
    id: 20,
    name: "Robotics Expo",
    dateTime: "20/07/2025 11:00 am",
    image: "https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/08/23/f570162d-5e50-47b7-a2ec-f46576510d5a_ea4f1ddb.jpg?itok=BPrparS4&v=1724395269",
    description: "See robots in action and learn the science behind them.",
    venue: "Tech Arena, Indore",
    ticketsAvailable: 292
  }
]


  
  export default Events;