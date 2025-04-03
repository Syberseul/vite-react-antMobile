import { type DetailsData, fetchDataAPI } from "@/APIs/details";
import { NavBar } from "antd-mobile";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function index() {
  const navigate = useNavigate();

  const [detail, setDetails] = useState<DetailsData | null>(null);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await fetchDataAPI(id!);
        setDetails(res.data.data);
      } catch (error) {
        throw new Error("fetch details error");
      }
    };
    getDetails();
    console.log(detail);
  }, [id]);

  // return loading if fetching data
  if (!detail) {
    return <div>Loading...</div>;
  }

  const back = () => {
    navigate(-1);
  };

  return (
    <div>
      <NavBar onBack={back}>{detail?.title}</NavBar>
      <div dangerouslySetInnerHTML={{ __html: detail?.content }}></div>
    </div>
  );
}

export default index;
