"use client";

import { useAuth } from "@/providers/auth";
import { useRecordsInfiniteQuery, useRecordsQuery } from "@/query/record";
import Section from "@/components/sections/shared/section";
import SectionHeader from "@/components/sections/shared/section-header";
import SectionBody from "@/components/sections/shared/section-body";
import RecordCard from "@/components/record-card/review-card/record-card";
import { recentRecordSectionStyles } from "./style.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const RecordsEmpty = () => {
  return <div>"아직 작성된 기록이 없어요"</div>;
};

const RecentRecordsSection = () => {
  const {
    user: { id },
  } = useAuth();
  const { data, isFetching, fetchNextPage, hasNextPage, isFetched } =
    useRecordsInfiniteQuery(id);
  const { ref: triggerRef, inView } = useInView();
  const isEmpty = isFetched && data?.pages[0].items.length === 0;
  useEffect(() => {
    console.log(inView);
    if (inView && hasNextPage && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Section>
      <SectionHeader
        title="최근 기록 📚"
        description="기록을 차곡 차곡 쌓아보세요"
      />
      <SectionBody>
        {
          <>
            {isEmpty && <RecordsEmpty />}
            {!isEmpty && (
              <ul className={recentRecordSectionStyles.list}>
                {data?.pages.map((page) =>
                  page.items.map(
                    ({
                      id,
                      title,
                      recordDetail,
                      bookImage,
                      bookTitle,
                      updatedAt,
                      rating,
                    }) => (
                      <li key={id}>
                        <RecordCard
                          id={id}
                          title={title}
                          description={recordDetail}
                          coverImageUrl={bookImage}
                          bookTitle={bookTitle}
                          updatedAt={updatedAt}
                          rating={rating}
                        />
                      </li>
                    )
                  )
                )}
              </ul>
            )}
          </>
        }
      </SectionBody>
      <div ref={triggerRef}></div>
    </Section>
  );
};

export default RecentRecordsSection;
