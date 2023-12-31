import { type NamePage } from "@/types/name-project";
import { client } from "./client";
import { type TypedObject } from "sanity";

export async function getNamePage(slug: string): Promise<NamePage[]> {
    return client.fetch(
        `*[_type == "page" && slug.current == $slug]{
      _id,
      title,
      "slug": slug.current,
      content,
      source
    }`,
        { slug },
    );
}

export async function getAllPages(): Promise<Omit<NamePage, "content">[]> {
    return client.fetch(
        `*[_type == "page"]{
            _id,
            title,
            key,
            description,
            "slug": slug.current,
    }`,
    );
}

export async function getPageTitle(slug: string): Promise<NamePage[]> {
    return client.fetch(
        `*[_type == "page" && slug.current == $slug]{
        title,
        description
    }`,
        { slug }
    );
}

export async function getSimilarNames(): Promise<{ title: string; content: TypedObject }[]> {
    return client.fetch(
        `*[_type == "SimilarNamesSchema"]{
        title,
        content
    }`
    );
}