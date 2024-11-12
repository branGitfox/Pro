
import { Chrono } from "react-chrono";
function Experiences() {
    const items = [
        {
            title: " 2021",
            cardTitle: "Bachelor degree",
            cardSubtitle:"Got my BAC Diploma options D",
            cardDetailedText: "National diploma - Stella Maris", 
      
          },
        {
            title: "August 2022",
            cardTitle: "ITTI Formation",
            cardSubtitle:"Got my International English Certification",
            cardDetailedText: "American English accent, and speaking", 
      
          },
        {
        title: "June 2023",
        cardTitle: "DTC Web Formation",
        cardSubtitle:"Got my web Development Certifaction",
        cardDetailedText: "Three month formation in web development with certifaction",
  
      },

      {
        title: "November 2023 - January 2024",
        cardTitle: "Stage at STE Tavaratra",
        cardSubtitle:"Got my first stage attestation",
        cardDetailedText: "development of Web Application for managing Workers and Sakaries",
  
      },

      {
        title: "June 2024",
        cardTitle: "Live Coding contest",
        cardSubtitle:"First participation to Coding Event",
        cardDetailedText: "Contributing to development of Univesitech plateform Web Application",
  
      },

      {
        title: "Nowadays",
        cardTitle: "Licence in Computer Science at ISPM",
        cardSubtitle:"Doing my 3 Months Stage at MNTFop",
        cardDetailedText: "Building Web Application for managing Civil Documents", 
  
      }

       
      
    ]
  return (
    <div className="absolute top-[150px]">
              <div className="w-[90%] md:w-[700px] h-[950px]" >
        <Chrono items={items} mode='VERTICAL'/>
      </div>
    </div>
  )
}

export default Experiences
