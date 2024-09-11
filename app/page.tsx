import Grid from "@/components/Grid";
import Hero from "@/components/Hero";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="mx-w-7xl w-full">
   <Hero />
   <Grid />
    </div>
   </main>
  );
}
