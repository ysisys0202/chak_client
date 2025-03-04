import { AxiosRequestConfig } from "axios";
import {
  ReadingStates,
  RecordCountByReadingStateResponse,
  RecordItemResponse,
  RecordResponse,
} from "@/types/record";
import { generateQueryString } from "@/util/url";
import { serverFetcher } from "@/api/server/fetcher";

export type GetRecordsOptions = {
  userId?: number;
  start?: number;
  display?: number;
  readingState?: ReadingStates;
};

export const getRecordCountByReadingStateServer = (
  options: AxiosRequestConfig = {}
): Promise<RecordCountByReadingStateResponse> => {
  return serverFetcher(`/records/count/by-reading-state`, options);
};

export const getRecordsServer = (
  queryOptions: GetRecordsOptions,
  options: AxiosRequestConfig = {}
): Promise<RecordResponse> => {
  const queryParams = generateQueryString({
    ...queryOptions,
  });
  return serverFetcher(`/records?${queryParams}`, options);
};

export const getRecordServer = (
  id: number,
  options: AxiosRequestConfig = {}
): Promise<RecordItemResponse> => {
  return serverFetcher(`/records/${id}`, options);
};
