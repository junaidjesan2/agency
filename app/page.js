import Image from "next/image";
import BannerImage from "../public/banner/working.svg";
import MarketingIcon from "../public/icons/social-media_2518048.png";
import DevelopmentIcon from "../public/icons/development.png";
import BuisnessIcon from "../public/icons/buisness.png";
import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen mx-auto">
      <div className="mx-3 md:mx-auto md:mt-28 md:w-3/4 text-[#02073E]">
        <h1 className="h-20 text-2xl md:text-5xl text-center font-semibold ">
          Creativity starts with viewing the whole world differently
        </h1>
        <h1 className="h-20 text-center mx-auto text-lg mt-4">
          A service agency with customer satisfaction
        </h1>
      </div>
      <div className="mx-auto">
        <span className="mx-auto">
          <Link
            href="/account/register"
            className="h-14 w-44 px-3 py-2 flex justify-center items-center font-semibold hover:rounded-xl rounded-sm bg-[#0A8080] hover:drop-shadow-lg text-white"
          >
            Get Started
          </Link>
        </span>
        <Image className="mx-auto h-96 w-full" src={BannerImage} />
      </div>
      <section className="md:mt-20">
        <div className="">
          <h1 className="text-4xl text-center font-semibold text-[#0F2137] w-full px-2 md:w-1/2 md:mx-auto">
            Grow your startup with our Service
          </h1>
          <h1 className="text-sm mt-4 text-center w-full px-2 md:w-1/2 md:mx-auto">
            Build an incredible workplace and grow your business with Gusto’s
            all-in-one platform with amazing contents.
          </h1>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="flex items-start gap-2 px-2 ">
            <Image
              className="md:h-20 md:w-20 h-14 w-14"
              src={DevelopmentIcon}
            />
            <div className="px-3">
              <h1 className="text-xl font-semibold">Ultimate development</h1>
              <h1 className="text-md text-start">
                Get your info tests delivered at home collect a sample from the
                your pogress tests.
              </h1>
            </div>
          </div>
          <div className="flex items-start gap-2 px-2">
            <Image className="md:h-20 md:w-20 h-14 w-14" src={MarketingIcon} />
            <div className="px-3">
              <h1 className="text-xl font-semibold">Marketing & advertising</h1>
              <h1 className="text-md text-start">
                Get your info tests delivered at home collect a sample from the
                your pogress tests.{" "}
              </h1>
            </div>
          </div>
          <div className="flex items-start gap-2 px-2">
            <Image className="md:h-20 md:w-20 h-14 w-14" src={BuisnessIcon} />
            <div className="px-3">
              <h1 className="text-xl font-semibold">Business Enterprise</h1>
              <h1 className="text-md text-start">
                Get your info tests delivered at home collect a sample from the
                your pogress tests.{" "}
              </h1>
            </div>
          </div>
        </section>
      </section>
      <section className="md:my-20 my-10">
        <h1 className="text-4xl px-4 py-3 text-justify md:text-start w-full md:w-3/4 mx-auto">
          “Whatever we create in Qwilr looks absolutely brilliant. It helps show
          our work in the best light, and is downright impressive when clients
          see a Qwilr Page we have made for them.”
        </h1>
        <h1 className="text-sm text-start w-3/4 mx-auto px-4">
          By Denny Albuz, Adviser of Paypal
        </h1>
      </section>
      <section>
        <div>
          <h1 className="text-4xl font-semibold mx-auto text-center w-full md:w-2/4">
            Other services you must appreciate
          </h1>
          <h1 className="text-xl mx-auto text-center px-3 w-full md:w-2/4">
            Focus only on the meaning, we take care of the design. As soon as
            the meeting end you can export in one click into your preferred.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="flex items-start gap-2 px-2 ">
            <Image
              className="md:h-20 md:w-20 h-14 w-14"
              src={DevelopmentIcon}
            />
            <div className="px-3">
              <h1 className="text-xl font-semibold">Ultimate development</h1>
              <h1 className="text-md text-start">
                Get your info tests delivered at home collect a sample from the
                your pogress tests.
              </h1>
            </div>
          </div>
          <div className="flex items-start gap-2 px-2 ">
            <Image
              className="md:h-20 md:w-20 h-14 w-14"
              src={DevelopmentIcon}
            />
            <div className="px-3">
              <h1 className="text-xl font-semibold">Ultimate development</h1>
              <h1 className="text-md text-start">
                Get your info tests delivered at home collect a sample from the
                your pogress tests.
              </h1>
            </div>
          </div>
          <div className="flex items-start gap-2 px-2 ">
            <Image
              className="md:h-20 md:w-20 h-14 w-14"
              src={DevelopmentIcon}
            />
            <div className="px-3">
              <h1 className="text-xl font-semibold">Ultimate development</h1>
              <h1 className="text-md text-start">
                Get your info tests delivered at home collect a sample from the
                your pogress tests.
              </h1>
            </div>
          </div>
          <div className="flex items-start gap-2 px-2 ">
            <Image
              className="md:h-20 md:w-20 h-14 w-14"
              src={DevelopmentIcon}
            />
            <div className="px-3">
              <h1 className="text-xl font-semibold">Ultimate development</h1>
              <h1 className="text-md text-start">
                Get your info tests delivered at home collect a sample from the
                your pogress tests.
              </h1>
            </div>
          </div>
          <div className="flex items-start gap-2 px-2 ">
            <Image
              className="md:h-20 md:w-20 h-14 w-14"
              src={DevelopmentIcon}
            />
            <div className="px-3">
              <h1 className="text-xl font-semibold">Ultimate development</h1>
              <h1 className="text-md text-start">
                Get your info tests delivered at home collect a sample from the
                your pogress tests.
              </h1>
            </div>
          </div>
          <div className="flex items-start gap-2 px-2 ">
            <Image
              className="md:h-20 md:w-20 h-14 w-14"
              src={DevelopmentIcon}
            />
            <div className="px-3">
              <h1 className="text-xl font-semibold">Ultimate development</h1>
              <h1 className="text-md text-start">
                Get your info tests delivered at home collect a sample from the
                your pogress tests.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
