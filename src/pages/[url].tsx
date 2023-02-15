import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { api } from "../utils/api";

const ShortUrlPage = () => {
  const router = useRouter();

  const fetchLongUrl = api.example.fetchLongUrl.useQuery(
    {
      shortUrl: router.query.url as string,
    },
    {
      enabled: !!router.query.url,
    }
  );

  useEffect(() => {
    if (!fetchLongUrl.data) return;

    window.location.href = fetchLongUrl.data;
  }, [fetchLongUrl.data]);

  return <div></div>;
};

export default ShortUrlPage;

//This is a React functional component called ShortUrlPage. 
//It imports useRouter from the Next.js router, useEffect from React, and an API utility function from "../utils/api".

//The useRouter hook is used to get the current URL query parameter, which is used to fetch the long URL from an external API endpoint. 
//The fetched long URL is then used to redirect the user to the original link.

//The fetchLongUrl constant uses a hook from the api utility function to fetch the long URL from the external API. 
//It takes an object as the first parameter that contains the short URL as a query parameter. 
//It also takes an options object as the second parameter that enables the query only when there is a valid url parameter in the router's query.

//The useEffect hook is used to redirect the user to the long URL. 
//The useEffect hook runs every time the fetchLongUrl data changes. 
//If fetchLongUrl.data is not null or undefined, then the window.location.href is set to the fetchLongUrl.data which redirects the user to the long URL.

//Finally, the component returns an empty <div></div> which is not visible on the page but necessary for the component to render properly.

//In summary, this code defines a functional component that redirects the user to the long URL 
//associated with a short URL passed in as a query parameter in the URL.




