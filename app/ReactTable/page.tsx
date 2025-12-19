import ReactTable from '../components/ReactTable';

export default function ReactTablePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Tickets Dashboard</h1>
        <ReactTable />
      </div>
    </div>
  );
}