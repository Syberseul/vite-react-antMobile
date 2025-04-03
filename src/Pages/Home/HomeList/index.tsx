import { Image, List, InfiniteScroll } from "antd-mobile";
import { useEffect, useState } from "react";

import { fetchListAPI, type ListRes } from "@/APIs/list";
import { useNavigate } from "react-router-dom";

type Props = {
  channelId: string;
};

function HomeList(props: Props) {
  const navigate = useNavigate();

  const { channelId } = props;

  const [listRes, setListRes] = useState<ListRes>({
    results: [],
    pre_timestamp: "" + new Date().getTime(),
  });

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await fetchListAPI({
          channel_id: channelId,
          timestamp: "" + new Date().getTime(),
        });

        // console.log(res);
        setListRes({
          results: res.data.data.results,
          pre_timestamp: res.data.data.pre_timestamp,
        });
      } catch (error) {
        throw new Error("fetch list error");
      }
    };

    getList();
  }, [channelId]);

  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    try {
      const res = await fetchListAPI({
        channel_id: channelId,
        timestamp: listRes.pre_timestamp,
      });

      setListRes({
        results: [...listRes.results, ...res.data.data.results],
        pre_timestamp: res.data.data.pre_timestamp,
      });

      if (res.data.data.results.length == 0) {
        setHasMore(false);
      }
    } catch (error) {
      throw new Error("fetch list error");
    }
  };

  const goToDetails = (id: string) => {
    navigate(`/details?id=${id}`);
  };

  return (
    <>
      <List>
        {listRes.results.map((item) => (
          <List.Item
            onClick={() => goToDetails(item.art_id)}
            key={item.art_id}
            prefix={
              <Image
                src={item.cover.images?.[0]}
                style={{ borderRadius: 20 }}
                fit="cover"
                width={40}
                height={40}
              />
            }
          >
            {item.title}
          </List.Item>
        ))}
      </List>

      <InfiniteScroll hasMore={hasMore} loadMore={loadMore} threshold={10} />
    </>
  );
}

export default HomeList;
