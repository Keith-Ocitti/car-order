import React from "react";
import { Card, Search, Table } from "@/components";
import SideBar from "@/components/Sidebar/drawer";

export default function Dashboard() {
  return (
    <div className="page-content" style={{ zIndex: 1 }}>
      <div className="flex flex-col lg:flex-row ">
        <Card />
        <div className="basis-full lg:basis-3/4 bg-white p-4 ">
          <Search />
          <Table />
        </div>
      </div>
    </div>
  );
}
