import { Server, RefreshCcw, Play, Square, Database } from "lucide-react";

export default function Services() {
  return (
    <div className="space-y-10">

      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Services
        </h1>
        <p className="text-gray-500 mt-1">
          Manage all core Evergon services in one place.
        </p>
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {/* Service Item */}
        <ServiceCard
          name="Nginx"
          description="Handles all HTTP requests and virtual hosts."
          status="running"
          icon={<Server size={24} className="text-indigo-500" />}
        />

        <ServiceCard
          name="PHP-FPM"
          description="Runs PHP versions for your local development."
          status="running"
          icon={<Play size={24} className="text-indigo-500" />}
        />

        <ServiceCard
          name="MySQL"
          description="Primary SQL database engine for applications."
          status="stopped"
          icon={<Database size={24} className="text-indigo-500" />}
        />

        <ServiceCard
          name="PostgreSQL"
          description="Advanced SQL database for high-performance apps."
          status="running"
          icon={<Database size={24} className="text-indigo-500" />}
        />

      </div>
    </div>
  );
}

// =======================
//  COMPONENT: ServiceCard
// =======================
function ServiceCard({
  name,
  description,
  status,
  icon,
}: {
  name: string;
  description: string;
  status: "running" | "stopped";
  icon: JSX.Element;
}) {
  const isRunning = status === "running";

  return (
    <div className="bg-white border rounded-2xl shadow-sm p-6 hover:shadow-md transition group">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 transition">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-gray-500 text-sm">{description}</p>
          </div>
        </div>

        {/* Status Badge */}
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            isRunning
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {isRunning ? "Running" : "Stopped"}
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 mt-6">
        {isRunning ? (
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg flex items-center gap-2 hover:bg-red-700 transition">
            <Square size={18} />
            Stop
          </button>
        ) : (
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg flex items-center gap-2 hover:bg-green-700 transition">
            <Play size={18} />
            Start
          </button>
        )}

        <button className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 flex items-center gap-2 hover:bg-gray-300 transition">
          <RefreshCcw size={18} />
          Restart
        </button>
      </div>
    </div>
  );
}
