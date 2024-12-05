import ServicesBox from "./ServicesBox";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
const Services = () => {
  return (
    <section className="bg-secondary dark:bg-gray-900 dark:text-white py-10">
      <div className="">
      
      </div>
      <div className="container flex flex-col items-center">
        <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">
          Projetos
        </h1>
        <p className="text-slate-500 text-center md:w-[50%] mx-auto">
          O laboratório conta com diversos projetos de pesquisa e extensão em andamento
        </p>
        {/* Tabs do flowbite */}
        <Tabs aria-label="Full width tabs" variant="fullWidth">
        <Tabs.Item active title="Extensão" icon={HiUserCircle}>
        <ServicesBox />
        </Tabs.Item>
        <Tabs.Item title="Pesquisa" icon={MdDashboard}>
         
        </Tabs.Item>
        <Tabs.Item title="Inovação" icon={HiAdjustments}>
          
        </Tabs.Item>
        <Tabs.Item title="Ensino" icon={HiAdjustments}>
          <div>
            <p>projetos de ensino</p>
          </div>
        </Tabs.Item>
        <Tabs.Item title="GEASP" icon={HiAdjustments}>
          
        </Tabs.Item>
      </Tabs>
      </div>
      <div>
        
      </div>
    </section>
  );
};

export default Services;
