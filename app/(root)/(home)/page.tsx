// //The layout in the home route group will be responsible for the layout of all the pages in (home)
// import React from "react";

// const Home = () => {
//   return (
//     <section className="flex size-full flex-col gap-10 text-white">
//       <h1 className="text-3xl font-bold">Home </h1>
//     </section>
//   );
// };

// export default Home;
"use client";
import React,{Suspense, useEffect} from "react";
const LazyComponent=React.lazy(()=>import ('./personal-room/page'))

const page = () => {
  useEffect(() => {
    console.log('Effect runs after every render');
  });
  useEffect(() => {
    console.log('Effect runs only once after initial render');
  }, []);
  
  return (
    <Suspense fallback={<>Loading...</>}>
      <LazyComponent/>
    </Suspense>
  )
}

export default page