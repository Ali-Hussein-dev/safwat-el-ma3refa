import { type TypedObject } from "sanity"

import { client } from "./client";
export type QuranTopic = {
    title: string;
    content: TypedObject;
    order: number;
}
export const getQuranTopicsTitles = async (): Promise<Pick<QuranTopic, "title" | "order">[]> => await client.fetch(`*[_type == "quranTopics"] | order(order) {
    title, 
    order
}`)

export const getQuranTopicContent = async (order: number): Promise<QuranTopic[]> => await client.fetch(`*[_type=="quranTopics" && order == $order] {
    title,
    content,
    order
}`, { order })