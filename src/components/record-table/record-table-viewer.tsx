"use client";

import React from "react";
import RecordTable from "./record-table";
import { useParams } from "next/navigation";
import { useRecordQuery } from "@/query/record";
import { BookData } from "@/providers/record-form";
import BookCoverImage from "../book/cover-image/cover-image";

const RecordTableViewer = () => {
  const { id } = useParams() as unknown as { id: number };
  const { data } = useRecordQuery(id);

  const bookData: BookData = {
    id: data?.bookId || NaN,
    title: data?.title || "",
    image: data?.bookImage || "",
    publisher: data?.bookPublisher || "",
    author: data?.bookAuthor || "",
    pubdate: data?.bookIsbn || "",
    link: "",
    discount: "",
    isbn: data?.bookPubdate || "",
    description: "",
  };

  const recordData = {
    bookId: data?.bookId,
    userId: data?.userId,
    title: data?.title,
    readingState: data?.readingState,
    rating: data?.rating,
    recordDetail: data?.recordDetail,
    isPublic: data?.isPublic,
  };

  return (
    <RecordTable
      renderLabel={({ label }) => label}
      renderBookCoverImage={() =>
        data ? (
          <BookCoverImage
            imageUrl={data.bookImage}
            alt={`${data.title} 책 표지`}
          />
        ) : (
          <BookCoverImage.Skeleton />
        )
      }
      renderBookData={(fieldId) => bookData[fieldId]}
      renderRecordData={(fieldId) => recordData[fieldId]}
    />
  );
};

export default RecordTableViewer;
