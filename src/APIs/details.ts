import { http } from "@/utils";
import { type ResType } from "./shared";

export type DetailsData = {
  art_id: string;
  attitude: number;
  aut_id: string;
  aut_name: string;
  aut_photo: string;
  comm_count: number;
  content: string;
  is_collected: boolean;
  is_followed: boolean;
  like_count: number;
  pubdate: string;
  read_count: number;
  title: string;
  [property: string]: any;
};

export const fetchDataAPI = (id: string) => {
  return http.request<ResType<DetailsData>>({
    url: `/articles/${id}`,
  });
};
