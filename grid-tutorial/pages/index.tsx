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
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[300px_300px_300px] overflow-hidden font-Roboto">

        {/* Items 1 */}
        <div className="col-[1_/_3] row-[1_/_3]">
          <Image src={Items4} height={1000} width={1000} alt="items1" className="w-full h-full object-cover" />
        </div>

        {/* Items 2 */}
        <div className="grid grid-cols-[1fr_1fr] grid-rows-[300px] col-[3_/_5] row-[1_/_2]">
          <div className="flex justify-center items-center p-[3rem]">
            <div>
              <h3 className="text-xl font-bold">Handmade Piece</h3>
              <p className="text-xs mx-[0rem] my-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptates soluta quaerat laudantium incidunt eos eaque sunt odio iste ipsam ut eveniet debitis a excepturi eum, molestias dolorem ipsa unde.</p>
              <Link href="/">
                <button className="inline-block bg-black text-white text-none px-[1rem] py-[0.5rem]">Check Out</button>
              </Link>
            </div>
          </div>
          <div>
            <Image src={Items2} height={500} width={500} alt="items2" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Items 3 */}
        <div className="grid grid-cols-[1fr_1fr] col-[3_/_5] row-[2/_3]">
          <div>
            <Image src={Items3} height={500} width={500} alt="items3" className="w-full h-full object-cover" />
          </div>
          <div className="flex justify-center items-center p-[3rem]">
            <div>
              <h3 className="text-xl font-bold">Woodworking</h3>
              <p className="text-xs mx-[0rem] my-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptates soluta quaerat laudantium incidunt eos eaque sunt odio iste ipsam ut eveniet debitis a excepturi eum, molestias dolorem ipsa unde.</p>
              <Link href="/">
                <button className="inline-block bg-black text-white text-none px-[1rem] py-[0.5rem]">Check Out</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Items 4 */}
        <div className="grid grid-cols-[1fr_1fr] col-[1_/_3] row-[3_/_4]">
          <div>
            <Image src={Items1} height={500} width={500} alt="items4" className="w-full h-full object-cover" />
          </div>
          <div className="flex justify-center items-center p-[3rem]">
            <div>
              <h3 className="text-xl font-bold">Studio House</h3>
              <p className="text-xs mx-[0rem] my-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptates soluta quaerat laudantium incidunt eos eaque sunt odio iste ipsam ut eveniet debitis a excepturi eum, molestias dolorem ipsa unde.</p>
              <Link href="/">
                <button className="inline-block bg-black text-white text-none px-[1rem] py-[0.5rem]">Check Out</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Items 5 */}
        <div className="col-[3_/_5] row-[3_/_4]">
          <Image src={Items5} height={1000} width={1000} alt="items5" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Home;