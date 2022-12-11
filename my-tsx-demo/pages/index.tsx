import { GetStaticProps } from 'next'
import React, { ReactElement } from 'react';
import { Data } from '../interface/youtubes';

export interface Props {
  data: Data;
}

function index({ data }: Props): ReactElement {
  const { youtubes } = data
  return (
    <div>
      <ul>
        {youtubes.map((items) => (
          <li>
            <div>{items.title}</div>
            <span className="text-gray-500">{items.subtitle}</span>
            <div>
              <h3>{items.youtube_image}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default index

export const getStaticProps: GetStaticProps = async (context) => {
  const url = "https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods";
  const res = await fetch(url);
  const result = await res.json();
  const data: Data = result;
  return {
    props: {
      data
    }
  }
}