import clsx from "clsx";
import Link from "next/link";
import * as React from "react";
import { GoLinkExternal } from "react-icons/go";

const list = [
  {
    name: "أسماء الله الحسنى",
    description: "الإحسان أن تعبد الله كأنك تراه، فإن لم تكن تراه فإنه يراك",
    href: "/names-of-Allah",
    status: "done",
  },
  {
    name: "مواضيع سور القرآن الكريم",
    description:
      "يُؤْتِي الْحِكْمَةَ مَن يَشَاءُ ۚ وَمَن يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا",
    href: "/quran-topics",
    status: "done",
  },
  {
    name: "المهلكات",
    description: "أَعْدَى عَدُوِّكَ نفسُكَ التى بين جَنْبَيْكَ",
    href: "/ruiners",
    status: "soon",
  },
  {
    name: "الدعاء والاستعانة",
    description:
      "وَقَالَرَبُّكُمُٱدۡعُونِيٓ أَسۡتَجِبۡلَكُمۡۚ إِنَّ ٱلَّذِينَ يَسۡتَكۡبِرُونَ عَنۡ عِبَادَتِي سَيَدۡخُلُونَ جَهَنَّمَ دَاخِرِينَ",
    href: "/",
    status: "soon",
  },
  {
    name: "التوحيد",
    description:
      "إِنَّ ٱللَّهَ لَايَغۡفِرُ أَن يُشۡرَكَ بِهِۦوَيَغۡفِرُ مَادُونَ ذَٰلِكَ لِمَن يَشَآءُۚ وَمَن يُشۡرِكۡ بِٱللَّهِ فَقَدِٱفۡتَرَىٰٓ إِثۡمًا عَظِيمًا",
    href: "/",
    status: "soon",
  },
  {
    name: "الصراط المستقيم",
    description:
      "وَإِنَّ ٱلَّذِينَ لَايُؤۡمِنُونَ بِٱلۡأٓخِرَةِعَنِ ٱلصِّرَٰطِ لَنَٰكِبُونَ",
    href: "/",
    status: "soon",
  },
];
const Overlay = () => (
  <div className="absolute inset-0 rounded backdrop-blur-md">
    <div className="center h-full w-full font-semibold">
      {"المحتوى قيد الإنشاء"}
    </div>
  </div>
);

const content = {
  h1: "صفوة المعرفة",
  p: "مواضيع تستهدف النفس والقلب والعقل التي يحتاجها كل مسلم",
};
export const Hero = () => {
  return (
    <section className="mx-auto max-w-3xl pb-10 pt-4 text-zinc-700 md:pt-28">
      <h1 className="text-grad-lime mb-1 text-center text-3xl font-black lg:text-4xl">
        {content.h1}
      </h1>
      <p className="px-3 text-center text-lg font-medium">{content.p}</p>
      <div className="grid gap-4 md:grid-cols-2 md:gap-7">
        {list.map((item, i) => (
          <Link
            key={i}
            className={clsx(
              `group relative rounded bg-gradient-to-t from-zinc-100 to-transparent shadow-lg duration-300 hover:shadow-xl`,
              i == 0 && "md:col-span-2",
              i == 5 && "md:col-span-2",
            )}
            href={item.href}
          >
            <div
              className={`center h-7 w-7 -translate-y-3 translate-x-3 rounded-full bg-zinc-900 text-zinc-200 opacity-0 duration-500 ${
                item.status == "done" && "shadow group-hover:opacity-100"
              }`}
            >
              <GoLinkExternal size="13" />
            </div>
            <div className="px-2 pb-4 pt-7 md:px-4">
              <div className="space-y-1 text-center">
                <h2 className="text-grad-zinc text-2xl font-bold">
                  {item.name}
                </h2>
                <p>{item.description}</p>
              </div>
              {item.status === "soon" && <Overlay />}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
