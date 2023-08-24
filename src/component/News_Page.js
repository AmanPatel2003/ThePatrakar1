import React from "react";
import { HiUserCircle } from "react-icons/hi";
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { ImEye } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
// @type {import('tailwindcss').Config}

export const News_Page = () => {
  return (
    <div className=" ">
      <div className="mx-auto flex-col overflow-hidden justify-center">
        <div className="2xl:px-[10%] px-[5%] lg:px-[8%] ">
          <div className="2xl:px-[20%] xl:px-[20%] lg:px-[15%] md:px-[12%] px-[10%] py-10 xs:py-[5%] ">
            <p className="my-[2%] xs:my-[3%] sm:my-[3%]">
              <a href="/" className="mr-1 hover:text-blue-500">
                <u>Home</u>/
              </a>
              <a href="/rajniti" className="hover:text-blue-500">
                <u>Tech</u>/
              </a>
            </p>
            <div className="flex xs:my-[3%]">
              <a
                href="/"
                className="bg-blue-500 text-white rounded px-2 py-[2px] mr-3 "
              >
                Teach
              </a>
              <p className="text-gray-400">2 minutes read</p>
            </div>

            <p
              className="text-slate-800 text-2xl xs:text-2xl   sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-4xl leading-loose font-medium 
             mt-[1%]"
            >
              5 सालों में 19 हज़ार से ज़्यादा एससी, ओबीसी छात्रों ने केंद्रीय
              शिक्षण संस्थान छोड़े
            </p>

            <div className="flex justify-between items-center mt-[3%] xs:my-[3%]">
              <div className="flex items-center w-[100%]">
                <HiUserCircle size={45} className="text-gray-400" />
                <p className="pl-[1%] xs:text-xs">
                  <p className="">Narayan Bhui</p>
                  <p className="text-gray-400">3 days go</p>
                </p>
              </div>
              <div className="flex">
                <AiTwotoneLike size={25} className="ml-3 text-blue-500" /> 12
                <AiTwotoneDislike size={25} className="ml-3 text-red-600" />0
                <ImEye size={25} className="ml-3 text-gray-500" />4
              </div>
            </div>
          </div>
          <div className="flex-col bg-[#fbfbfb] pt-3 ">
            <div className="2xl:px-[20%] px-[10%] py-3 ">
              <div className="flex float-right  ">
                <BsWhatsapp size={30} className="ml-3 " />
                <BsFacebook size={30} className="ml-3 " />
                <FaTelegram size={30} className="ml-3 " />
              </div>
            </div>
            <div className=" text-slate-600  2xl:px-[20%] xl:px-[20%] lg:px-[15%] md:px-[12%] px-[10%] pt-10 xs:pt-[5%] xs:text-lg 2xl:text-xl xl:text-xl lg:text-xl mt-5 leading-10 text-justify">
              नई दिल्ली, एजेंसी, 2018 से 2023 के बीच अन्य पिछड़ा वर्ग (ओबीसी),
              अनुसूचित जाति (एससी) और अनुसूचित जनजाति (एसटी) समुदाय से आने वाले
              19,000 से अधिक छात्रों ने केंद्रीय विश्वविद्यालयों, भारतीय
              प्रौद्योगिकी संस्थान (आईआईटी) और भारतीय प्रबंधन संस्थान (आईआईएम)
              से ड्रॉपआउट (पढ़ाई बीच में छोड़ना) किया. इंडियन एक्सप्रेस के
              अनुसार, केंद्रीय शिक्षा राज्यमंत्री सुभाष सरकार ने बुधवार को
              राज्यसभा में एक लिखित प ्रश्न के उत्तर में यह जानकारी दी.
            </div>
          </div>
        </div>
        <div className="">
          <img src="" alt="" />
        </div>
        <div className="2xl:px-[10%] xl:px-[10%] lg:px-[8%] md:px-[7%] px-[5%] pb-12 ">
          <div className="2xl:px-[20%] xl:px-[20%] lg:px-[15%] md:px-[12%] px-[10%] py-10 bg-[#fbfbfb]">
            <p className=" text-slate-600 py-4  text-xl xs:text-lg 2xl:text-xl xl:text-xl lg:text-xl leading-8 text-justify">
              तमिलनाडु की सांसद तिरुचि शिवा ने सरकार से पिछले पांच वर्षों में
              आईआईटी, आईआईएम और अन्य केंद्रीय विश्वविद्यालयों से ड्रॉपआउट करने
              वाले अनुसूचित जाति,जनजाति और अन्य पिछड़ा वर्ग के उम्मीदवारों की
              संख्या के बारे में पूछा था. वह यह भी जानना चाहती थीं कि ‘क्या
              सरकार ने इन उच्च शिक्षण संस्थानों में ओबीसी, एससी और एसटी छात्रों
              की उच्च ड्रॉपआउट दर के कारणों के संबंध में कोई अध्ययन किया है.’
            </p>
            <p className=" text-slate-600 py-4  text-xl xs:text-lg 2xl:text-xl xl:text-xl lg:text-xl leading-8 text-justify">
              उनके सवाल के जवाब में मंत्री सुभाष सरकार ने खुलासा किया कि इस अवधि
              में 6,901 ओबीसी, 3,596 एससी और 3,949 एसटी छात्रों ने केंद्रीय
              विश्वविद्यालयों से ड्रॉपआउट किया. इसी तरह, 2,544 ओबीसी उम्मीदवार,
              1,362 एससी और 538 एसटी छात्र आईआईटी छोड़कर गए. इसके अलावा, 133
              ओबीसी, 143 एससी और 90 एसटी छात्रों न े पिछले पांच वर्षों में
              आईआईएम से ड्रॉपआउट किया.
            </p>
            <p className=" text-slate-600 py-4  text-xl xs:text-lg 2xl:text-xl xl:text-xl lg:text-xl leading-8 text-justify">
              मंत्री ने आगे कहा, ‘कमजोर आर्थिक पृष्ठभूमि से आने वाले छात्रों की
              शिक्षा चलती रहे, इसके लिए सरकार ने शुल्क में कमी, अधिक संस्थानों
              की स्थापना, छात्रवृत्ति, राष्ट्रीय स्तर की छात्रवृत्ति में उन्हें
              प्राथमिकता देन े जैसे कई कदम उठाए हैं. अनुसूचित जाति/जनजाति के
              छात्रों की भलाई के लिए आईआईटी में ट्यूशन फीस की छूट, केंद्रीय
              क्षेत्र योजना के तहत राष्ट्रीय छात्रवृत्ति, संस्थानों में
              छात्रवृत्ति आदि जैसी योजनाएं भी लाई गई हैं.’
            </p>
            <p className=" text-slate-600 py-4  text-xl xs:text-lg 2xl:text-xl xl:text-xl lg:text-xl leading-8 text-justify">
              बता दें कि इससे पहले साल 2021 में शिक्षा मंत्रालय ने संसद में
              बताया था कि देश के शीर्ष सात भारतीय प्रौद्योगिकी संस्थानों
              (आईआईटी) में स े ग्रेजुएशन के दौरान ही पढ़ाई छोड़ने वाले
              (ड्रॉपआउट) लगभग 63 फीसदी छात्र आरक्षित श्रेणी (एससी/एसटी) से आते
              हैं.
            </p>
            <p className=" text-slate-600 py-4  text-xl xs:text-lg 2xl:text-xl xl:text-xl lg:text-xl leading-8 text-justify">
              दलित और आदिवासी कार्यकर्ता लंबे समय से यह बहस छेड़ते आ रहे हैं कि
              इन समुदायों से आने वाले छात्र इन प्रतिष्ठित संस्थानों में बहुत
              अधिक दबाव और भेदभाव का सामना करते हैं.
            </p>
            <p className=" text-slate-600 py-4  text-xl xs:text-lg 2xl:text-xl xl:text-xl lg:text-xl leading-8 text-justify">
              हालांकि, तब केंद्रीय शिक्षा मंत्री धर्मेंद्र प्रधान ने कहा था कि
              पढ़ाई छोड़ने वाले या तो किसी अन्य विभाग या संस्थान में दाखिले के
              कारण सीट छोड़कर चले गए या फिर उन्होंने किसी निजी कारण से ऐसा किया.
            </p>
          </div>
        </div>
        <div className="border-2 flex p-[2%] mx-[1%]">
          <div className="flex items-center">
            
            <HiUserCircle size={65} className="text-gray-400" />
          </div>
          <div className="">
            <p className="ml-2">Narayan Bhui</p>
            <p className="ml-2 ">
              Narayan Bhui is the founder of <b>ThePatrakar.in</b>
            </p>
            <p className="ml-2 ">
              He has 95 year's old but he naver give up
            </p>
            <p className="ml-2 ">
              He is the ex major of indian army
            </p>
          </div>
        </div>
        <div className="border-2  my-[2%] mx-[1%]">
          <h1 className=" text-3xl font-medium py-3 px-4">Related Articles</h1>
          <div className="flex xs:flex-col p-2 my-5">
            <div className="p-2">
              <img src="/img/bg3.jpg" alt="" className="" />
              <p className="text-xl font-medium my-4 text-slate-400">
                NASA plans to fix mars spacecraft leak then launch in 2018
              </p>
            </div>
            <div className="p-2">
              <img src="/img/bg3.jpg" alt="" className="" />
              <p className="text-xl font-medium my-4 text-slate-400">
                शाला प्रवेश के दिन ही बच्चों को मिलेगा निःशुल्क गणवेश
              </p>
            </div>
            <div className="p-2 xs:hidden sm:hidden md:flex-col lg:flex-col xl:flex-col 2xl:flex-col">
              <img src="/img/bg3.jpg" alt="" className="" />
              <p className="text-xl font-medium my-[2%] text-slate-400">
                सीएसआर-जीएचआरडीसी बी-स्कूल रैंकिंग 2022 में भारतीय प्रबंध
                संस्थान रायपुर पहले स्थान पर रहा
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
