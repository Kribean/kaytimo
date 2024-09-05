import ContainerActivities from "@/components/ContainerActivities";
import { FilterCard } from "@/components/FilterCard";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const ActivitiesPage = ({ params }) => {
  return (
    <div className="flex flex-col min-h-screen bg-base-200 justify-between">
      <Navbar />
      <div className="flex flex-col w-full justify-center items-center pt-[200px]">
        <h1 className="text-5xl font-bold">Les activités</h1>
      </div>
      <FilterCard params={params}/>
      <ContainerActivities params={params} />
      <Footer />
    </div>
  );
};

export default ActivitiesPage;
