import { fetchChannelAPI } from "@/APIs/list";
import type { ChannelItem } from "@/APIs/list";

import { useEffect, useState } from "react";

const useTabs = () => {
  const [channels, setChannels] = useState<ChannelItem[]>([]);

  useEffect(() => {
    const getChannelList = async () => {
      try {
        const res = await fetchChannelAPI();

        setChannels(res.data.data.channels);
      } catch (error) {
        throw new Error("fetch channel error");
      }
    };
    getChannelList();
  }, []);

  return { channels };
};

export { useTabs };
