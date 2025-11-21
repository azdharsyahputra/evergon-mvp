import { Server, Code2, FolderDot, Activity } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-10">

      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Overview of your Evergon environment.
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition group">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-sm font-medium">Engine Status</p>
            <Activity className="text-indigo-500 group-hover:scale-110 transition" size={24} />
          </div>
          <div className="mt-3">
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
              Running
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition group">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-sm font-medium">PHP Versions</p>
            <Code2 className="text-indigo-500 group-hover:scale-110 transition" size={24} />
          </div>
          <h2 className="mt-3 text-2xl font-bold text-gray-900">3 Installed</h2>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition group">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-sm font-medium">Active Projects</p>
            <FolderDot className="text-indigo-500 group-hover:scale-110 transition" size={24} />
          </div>
          <h2 className="mt-3 text-2xl font-bold text-gray-900">7 Projects</h2>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition group">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-sm font-medium">Nginx Status</p>
            <Server className="text-indigo-500 group-hover:scale-110 transition" size={24} />
          </div>
          <div className="mt-3">
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
              Running
            </span>
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Coming Soon</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Coming Soon Card 1 */}
          <div className="bg-white p-6 border rounded-2xl shadow-sm hover:shadow-md transition group">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <Activity className="text-indigo-500" size={20} />
              Service Controls
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Start/Stop PHP-FPM, MySQL, PostgreSQL & Nginx.
            </p>
          </div>

          {/* Coming Soon Card 2 */}
          <div className="bg-white p-6 border rounded-2xl shadow-sm hover:shadow-md transition group">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <FolderDot className="text-indigo-500" size={20} />
              Project Scanner
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Auto-detect Laravel, CI4, React, Next.js, Node, and PHP projects.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
