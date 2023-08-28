import React from "react";
import { Comp } from "./Comp";
import { Comp1 } from "./Comp1";
import { Comp2 } from "./Comp2";

export const Home = () => {
  let  Paira="रायपुर। Raipur News इन दिनों राजधानी सहित प्रदेशभर में पटवारियों द्वारा बिना रिश्वत  लेने की शिकायतें आम हो चुकी हैं। ऐसा ही एक मामला प्रदेश की राजधानी में भी सामन े आया है। जिसकी शिकायत कलेक्टर तक पहुंच गई है। सोमवार को हुई जनचौपाल में एक किसान ने महिला पटवारी द्वारा डिजीटल साइन करने के एवज में रिश्वत मांगने की शिकायत की है।"

  let para = Paira.slice(0,200)
  return (
    <div className="flex  md:px-[1%] sm:px-[1%]  ">
      <div className=" flex xs:w-full sm:w-full md:w-full w-[68%]  xs:mx-[1%]">
        <div className="  lg:border-r-2 xl:border-r-2 2xl:border-r-2 mt-6   border-gray-400">
          <div className="">
            <Comp
              path="/news"
              btn="कानून व्यवस्था"
              img="/img/mg12.webp"
              heading="डिजिटल साइन करने महिला पटवारी 
ने मांगी रिश्वत; एसडीएम ने 
शुरु की जांच"
              paira={para}
            />
          </div>
          <hr className="h-0.5 bg-gray-700 mx-5 my-6 " />
          <div className="">
            <Comp
              path="/rajniti"
              btn="राजनीति"
              img="/img/mg2.webp"
              heading="राहुल गाधी के समर्थन में रायपुर-
बिलासपुर राष्ट्रीय राजमार्ग पर प्रदर्शन
-चक्का जाम; 600 कार्यकर्ता गिरफ्तार"
              paira={para}
            />
          </div>
          <hr className="h-0.5 bg-gray-700 mx-5 my-6 " />
          <div className="">
            <Comp
              path="/news"
              btn="राज्यशासन"
              img="/img/mg12.webp"
              heading="छत्तीसगढ प्रेम; राजस्थान के चिकित्सकों-
कर्मचारियों ने एम्स में दिया 103 यूनिट रक्त"
              paira={para}
            />
          </div>
          <hr className="h-0.5 bg-gray-700 mx-5 my-6 " />
          <div className="">
            <Comp
              path="/news"
              btn="राज्यशासन"
              img="/img/mg12.webp"
              heading="छत्तीसगढ प्रेम; राजस्थान के चिकित्सकों-
कर्मचारियों ने एम्स में दिया 103 यूनिट रक्त"
              paira={para}
            />
          </div>
          <hr className="h-0.5 bg-gray-700 mx-5 my-6 " />
          <div className="">
            <Comp
              path="/rajniti"
              btn="राजनीति"
              img="/img/logo4.webp"
              heading="6 अप्रैल को भाजपा का स्थापना दिवस;
प्रधानमंत्री मोदी करेंगे संबोधित"
              paira={para}
            />
          </div>
        </div>
      </div>
      <div className="xs:hidden sm:hidden md:hidden xs:w-[0%] sm:w-[0%] md:w-[0%] lg:w-[32%] xl:w-[32%] 2xl:w-[32%]">
        <div className=" ">
          <Comp1 />
        </div>
        <div className="">
          <Comp2 />
        </div>
      </div>
    </div>
  );
};
