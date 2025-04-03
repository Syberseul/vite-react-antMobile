import { Tabs } from "antd-mobile";

import "./style.css";

import { useTabs } from "./useTabs";
import HomeList from "./HomeList";

function index() {
  const { channels } = useTabs();

  return (
    <div>
      <div className="tabContainer">
        <Tabs defaultActiveKey="0">
          {channels.map((channel) => (
            <Tabs.Tab title={channel.name} key={channel.id}>
              <div className="listContainer">
                <HomeList channelId={"" + channel.id} />
              </div>
            </Tabs.Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default index;
