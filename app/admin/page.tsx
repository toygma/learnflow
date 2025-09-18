import React from "react";
import { ChartAreaInteractive } from "@/components/sidebar/chart-area-interactive";
import { DataTable } from "@/components/sidebar/data-table";
import { SectionCards } from "@/components/sidebar/section-cards";
import data from "./data.json";

const AdminIndexPage = () => {
  return (
    <>
      <SectionCards />
      <div className="px-4">
        <ChartAreaInteractive />
      </div>
      <DataTable data={data} />
    </>
  );
};

export default AdminIndexPage;