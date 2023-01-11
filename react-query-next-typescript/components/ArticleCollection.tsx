import React, { ReactElement } from "react";
import { Article } from "../interfaces/article";

const ArticleCollection = ({
  collection,
}: {
  collection: Article[];
}): ReactElement => {
  return (
    <div className="bg-wgite shadow rounded">
      <ul className="divide-y divide-gray-200">
        {collection.map((article) => (
          <li>
            <a href="" className="block hover:bg-gray-100">
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div className="text-lg text-blue-400">{article.title}</div>
                </div>
                <div className="ml-2">
                  {article.tag_list.map((tag) => (
                    <div className="ml-1 inline-flex px-2 text-xs rounded-full bg-gray-200 text-gray-700">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleCollection;
