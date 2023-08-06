import type { TagArray } from "./TagDef";

export class Article {
  id: string;
  title: string;
  htmlContent: string;
  tags: TagArray;
  creationDate: Date;
  imageUrl: string;
  imageAlt: string;

  constructor(
    id: string,
    title: string,
    htmlContent: string,
    tags: TagArray,
    creationDate: Date,
    imageUrl: string,
    imageAlt: string
  ) {
    this.id = id;
    this.title = title;
    this.htmlContent = htmlContent;
    this.tags = tags;
    this.creationDate = creationDate;
    this.imageUrl = imageUrl;
    this.imageAlt = imageAlt;
  }
}
