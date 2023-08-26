import React from "react";
import { Rajniti_1 } from "./Rajniti_1";
import { Comp2 } from "./Comp2";
import { BsSearch } from "react-icons/bs";

export const Rajniti = () => {
  return (
    <div className="">
      <div className="flex mt-6  ">
        <div className="w-[68%]  xs:w-[100%] sm:w-[100%] md:w-[100%] px-5 xs:px-[1%] sm:px-[1%] md:px-[1%] border-r-2 ">
          <div className="flex justify-between my-[3%]">
            <p className="my-2">
              <a href="/" className="hover:text-blue-500 mr-[2px]">
                Home/
              </a>
              World/राजनीति
            </p>
            <div className="text-4xl xs:text-2xl sm:text-3xl md:text-3xl   font-medium text-gray-800">
              राजनीति
            </div>
          </div>
          {/* <div className="flex justify-between items-center py-5">
            <div className="text-4xl xs:text-2xl sm:text-3xl md:text-3xl   font-medium text-gray-800">
              राजनीति
            </div>
            <div className="w-[40%] xs:hidden sm:hidden">
              <div className="border-2 h-7 rounded-xl text-center flex ">
                <div className="w-[10%] xs:w-[20%] sm:w-[20%] md:w-[20%] ">
                  <BsSearch className="ml-3 mt-1" />
                </div>
                <input
                  type="search"
                  className="w-[80%] xs:w-[75%] sm:w-[75%] md:[75%] focus:outline-none"
                />
              </div>
            </div>
          </div> */}
          <hr className="h-0.5 bg-gray-700  mb-9 xs:hidden sm:hidden " />
          <div className=" flex ">
            <div className="     border-gray-400">
              <div className="">
                <Rajniti_1
                  btn="कानून व्यवस्था"
                  img="/img/bg3.webp"
                  heading="अगले हफ्ते छत्तीसगढ़ आ सकते हैं पीएम 
मोदी, शुक्रवार को आएंगे ओम माथुर"
                  paira="रायपुर, चुनावी वर्ष में भाजपा के केंद्रीय 
मंत्रियों का दौरा लगातार जारी है। इस बीच
10 से 12 मई के…

"
                />
              </div>
              <hr className="h-0.5 bg-gray-700  my-6 " />

              <div className="">
                <Rajniti_1
                  btn="राजनीति"
                  img="/img/bg3.webp"
                  heading="चार साल बाद भी पीएम मोदी से नहीं 
मिल पाए भाजपा विधायक,अब केंद्रीय
मंत्रियों से मुलाकात का मांगा समय"
                  paira="रायपुर, प्रधानमंत्री नरेन्द्र मोदी से चुनावी टिप्स
लेने दिल्ली पहुंचे भाजपा विधायकों की
प्रधानमंत्री से मुलाकात नहीं हो पाई। पीएम…
"
                />
              </div>
              <hr className="h-0.5 bg-gray-700  my-6" />

              <div className="">
                <Rajniti_1
                  btn="रायपुर"
                  img="/img/bg3.webp"
                  heading="भाजपा स्थापना दिवस पर कार्यकर्ताओं
 का सम्मान"
                  paira="रायपुर, भारतीय जनता पार्टी छह अप्रैल की
सुबह को पार्टी का 43वां स्थापना दिवस
मनाया जिसकी शुरुआत जिला कार्यालय 
एकात्म…"
                />
              </div>
              <hr className="h-0.5 bg-gray-700  my-6" />

              <div className="">
                <Rajniti_1
                  btn="राजनीति"
                  img="/img/bg3.webp"
                  heading="12 अप्रैल को बस्तर आएंगी प्रियंका गांधी;
आदिवासी महिलाओं से करेंगी बात"
                  paira="रायपुर, नई दिल्ली में कांग्रेस अध्यक्ष
मल्लिकार्जुन खरगे, राहुल गांधी और
प्रियंका गांधी वाड्रा से मुलाकात क
े बाद रायपुर पहुंचे…"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[32%] xs:hidden sm:hidden md:hidden">
          <div className="">
            <Comp2 />
          </div>
        </div>
      </div>
    </div>
  );
};
