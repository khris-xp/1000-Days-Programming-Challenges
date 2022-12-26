import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Items1 from "../public/images/items1.jpg";
import Items2 from "../public/images/items2.jpg";
import Items3 from "../public/images/items3.jpg";
import Items4 from "../public/images/items4.jpg";
import Items5 from "../public/images/items5.jpg";

const Home: NextPage = () => {
  return (
    <div className="m-0 p-0 box-border">
      <div className="grid lg:grid-cols-[1fr_1fr_1fr_1fr] lg:grid-rows-[300px_300px_300px] grid-cols-2 sm:grid-rows-[200px_300px_300px_300px_200px] grid-rows-[200px_200px_200px_200px_200px] overflow-hidden font-Roboto">

        {/* Items 1 */}
        <div className="lg:col-[1_/_3] lg:row-[1_/_3] col-[1_/_5]">
          <Image src={Items4} height={1000} width={1000} alt="items1" className="w-full h-full object-cover" />
        </div>

        {/* Items 2 */}
        <div className="grid lg:grid-cols-[1fr_1fr] lg:grid-rows-[300px] lg:col-[3_/_5] lg:row-[1_/_2] grid-cols-[1fr_1fr] col-[1_/_5] row-[2_/_3] overflow-hidden">
          <div className="flex justify-center items-center sm:p-[3rem] p-[1rem]">
            <div>
              <h3 className="sm:text-xl font-bold min-[340]:text-base text-sm">Handmade Piece</h3>
              <p className="sm:text-xs sm:mx-[0rem] sm:my-[1rem] text-[9px] my-[0.4rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptates soluta quaerat laudantium incidunt eos eaque sunt odio iste ipsam ut eveniet debitis a excepturi eum, molestias dolorem ipsa unde.</p>
              <Link href="/">
                <button className="inline-block bg-black text-white text-none sm:px-[1rem] sm:py-[0.5rem] px-[0.5rem] py-[0.25rem]">Check Out</button>
              </Link>
            </div>
          </div>
          <div>
            <Image src={Items2} height={500} width={500} alt="items2" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Items 3 */}
        <div className="grid lg:grid-cols-[1fr_1fr] lg:col-[3_/_5] lg:row-[2/_3] grid-cols-[1fr_1fr] col-[1_/_5] row-[3_/_4] overflow-hidden">
          <div>
            <Image src={Items3} height={500} width={500} alt="items3" className="w-full h-full object-cover" />
          </div>
          <div className="flex justify-center items-center sm:p-[3rem] p-[1rem]">
            <div>
              <h3 className="sm:text-xl font-bold min-[340]:text-base text-sm">Woodworking</h3>
              <p className="sm:text-xs sm:mx-[0rem] sm:my-[1rem] text-[9px] my-[0.4rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptates soluta quaerat laudantium incidunt eos eaque sunt odio iste ipsam ut eveniet debitis a excepturi eum, molestias dolorem ipsa unde.</p>
              <Link href="/">
                <button className="inline-block bg-black text-white text-none sm:px-[1rem] sm:py-[0.5rem] px-[0.5rem] py-[0.25rem]">Check Out</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Items 4 */}
        <div className="grid lg:grid-cols-[1fr_1fr] lg:col-[1_/_3] lg:row-[3_/_4] grid-cols-[1fr_1fr] col-[1_/_5] row-[4_/_5]">
          <div>
            <Image src={Items1} height={500} width={500} alt="items4" className="w-full h-full object-cover" />
          </div>
          <div className="flex justify-center items-center sm:p-[3rem] p-[1rem]">
            <div>
              <h3 className="sm:text-xl font-bold min-[340]:text-base text-sm">Studio House</h3>
              <p className="sm:text-xs sm:mx-[0rem] sm:my-[1rem] text-[9px] my-[0.4rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptates soluta quaerat laudantium incidunt eos eaque sunt odio iste ipsam ut eveniet debitis a excepturi eum, molestias dolorem ipsa unde.</p>
              <Link href="/">
                <button className="inline-block bg-black text-white text-none sm:px-[1rem] sm:py-[0.5rem] px-[0.5rem] py-[0.25rem]">Check Out</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Items 5 */}
        <div className="lg:col-[3_/_5] lg:row-[3_/_4] col-[1_/_5] row-[5_/_6]">
          <Image src={Items5} height={1000} width={1000} alt="items5" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Home;