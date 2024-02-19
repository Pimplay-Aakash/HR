// import InvitePage3 from "@/components/one/InvitePage3";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="">
//       {/* <InvitePage3/> */}
//     </main>
//   );
// }
"use client"
import React, { useState } from 'react';
import TimeZoneComponent from '@/components/TImeZone';

const HomePage = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState(null);

  const handleSelectTimeZone = (value) => {
    setSelectedTimeZone(value);
  };

  return (
    <div>
      <h1>Next.js with Ant Design Time Zone Selector</h1>
      <TimeZoneComponent onSelectTimeZone={handleSelectTimeZone} />
      {selectedTimeZone && (
        <p>Selected Time Zone: {selectedTimeZone}</p>
      )}
    </div>
  );
};

export default HomePage;
