import { PortableText } from "@portabletext/react";
import { getSimilarNames } from "@sanity/lib/get-name-page";
import * as React from "react";
import { TabsContent } from "@/components/ui/tabs";

//======================================
export const TabContentSimilarNames = async () => {
  const list = await getSimilarNames();
  return (
    <TabsContent value="similars" className="pt-5">
      <div className="w-full gap-8 flex-col-center">
        {list.map((o, i) => (
          <div
            className="rounded-xl border-[0.5px] border-b-2 border-zinc-300 bg-gradient-to-t from-zinc-50 to-transparent px-4 py-8 shadow-lg"
            key={i}
          >
            <div className="relative mb-4 gap-1 flex-row-center">
              <div className="absolute h-[1.5px] w-full bg-gradient-to-r from-transparent via-primary-300 to-transparent" />
              <h2 className="center z-[2] max-w-fit grow bg-white px-2 font-bold text-primary-500">
                {o.title}
              </h2>
            </div>
            <article className="prose max-w-4xl prose-headings:text-zinc-400 prose-p:text-lg prose-p:leading-10">
              <PortableText value={o.content} />
            </article>
          </div>
        ))}
      </div>
    </TabsContent>
  );
};
