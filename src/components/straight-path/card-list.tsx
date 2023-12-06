import { PortableText } from "@portabletext/react";
import { StraightPathCard } from "./straight-path-card";
import { type StraightPath } from "../../../sanity/lib/get-straight-path";
import { Accordion } from "../ui/accordion";
const content = {
  headers: [
    { label: "الإفراط" },
    { label: "الوسطية" },
    {
      label: "التفريط",
    },
  ],
};
export const revalidate = 1000;
const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold text-zinc-500">{children}</span>
);
const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="brorder-zinc-300 rounded-sm border-[1px] bg-zinc-100/40 pr-2 pt-2">
    {children}
  </div>
);
export const CardList = ({ items }: { items: StraightPath[] }) => {
  return (
    <div className="font-tajawal prose prose-zinc max-w-full space-y-4 prose-headings:text-zinc-700">
      <Accordion
        className="w-full rounded border bg-gradient-to-t from-zinc-100/60 to-zinc-50/10"
        type="multiple"
      >
        {items?.map((item, i) => (
          <StraightPathCard title={item.mainTitle} key={i}>
            <div className="prose prose-zinc grid max-w-full grid-cols-1 gap-2 pt-4 prose-headings:text-zinc-500 prose-p:my-1 prose-strong:text-zinc-500">
              <Wrapper>
                <Badge>{content.headers[0]?.label}</Badge>
                <PortableText value={item.leftContent} />
              </Wrapper>
              <Wrapper>
                <Badge>{content.headers[1]?.label}</Badge>
                <PortableText value={item.middleContent} />
              </Wrapper>
              <Wrapper>
                <Badge>{content.headers[2]?.label}</Badge>
                <PortableText value={item.rightContent} />
              </Wrapper>
            </div>
          </StraightPathCard>
        ))}
      </Accordion>
    </div>
  );
};
