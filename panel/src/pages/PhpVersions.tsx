import { ServerCog, Folder, Activity, Play, Square, RefreshCcw } from "lucide-react";

interface PhpVersion {
  version: string;
  path: string;
  status: "running" | "stopped";
}

const mockPhp: PhpVersion[] = [
  { version: "PHP 7.4", path: "php_versions/php74/", status: "running" },
  { version: "PHP 8.0", path: "php_versions/php80/", status: "stopped" },
  { version: "PHP 8.2", path: "php_versions/php82/", status: "running" },
];

export default function PhpVersions() {
  return (
    <div className="space-y-10">

      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          PHP Versions
        </h1>
        <p className="text-gray-500 mt-1">
          Manage installed PHP versions for Evergon Engine.
        </p>
      </div>

      {/* PHP List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockPhp.map((php, idx) => (
          <PhpVersionCard key={idx} php={php} />
        ))}
      </div>
    </div>
  );
}

// ========================
// COMPONENT: Version Card
// ========================
function PhpVersionCard({ php }: { php: PhpVersion }) {
  const isRunning = php.status === "running";

  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition group">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 transition">
            <ServerCog className="text-indigo-600" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">{php.version}</h3>
            <div className="flex items-center gap-2 text-gray-500 text-sm mt-0.5">
              <Folder size={15} />
              {php.path}
            </div>
          </div>
        </div>

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
