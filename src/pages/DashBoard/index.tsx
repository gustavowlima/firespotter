import { NavBar } from "../../components/NavBar";
import { Map } from "../../components/Map";
import { RecentsReports } from "./components/RecentsReports";
import { Autocomplete } from "@mui/joy";

export const DashBoard = () => {
  return (
    <div className="flex bg-gray-50 w-screen h-screen">
      <NavBar />
      <main className="flex flex-1 py-7">
        <div className="flex flex-col w-[50%] h-full gap-4">
          <section className="flex gap-4 flex-1 flex-col">
            <Autocomplete
              options={[]}
              noOptionsText="Nenhum resultado encontrado"
            />
            <div className="flex rounded-xl w-full bg-white h-full">
              <Map />
            </div>

            <div className="flex rounded-xl w-full bg-white h-full">
              <RecentsReports />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
