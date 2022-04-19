import { singOut } from "../../utils/firebase";
import CardDashboard from "../../components/CardDashboard";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  const logout = async () => {
    try {
      await singOut();
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="p-6 max-w-full text-center">
      <div className="flex w-full justify-end">
        <div></div>
        <button
          onClick={logout}
          className="py-2 px-3 border border-red-600 text-lg transtition-all duration-300 hover:bg-slate-600 ring ring-red-600 hover:text-white rounded-full w-36"
        >
          sing out
        </button>
      </div>
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="h-[1px] bg-pink-500 w-full"></div>
      <div className="flex w-full justify-center pt-8">
        <CardDashboard
          className="bg-sky-500 mr-4 hover:bg-sky-600"
          content="CURD Project"
        />
        <CardDashboard
          className="bg-orange-500 mx-4 hover:bg-orange-600"
          content="CURD Skil"
        />
        <CardDashboard
          className="bg-lime-500 ml-4 hover:bg-lime-600"
          content="Pesan"
        />
      </div>
    </div>
  );
}
