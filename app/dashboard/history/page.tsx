"use client";
import { useEffect, useState } from "react";
import { format } from "date-fns";

type HistoryItem = {
  id: number;
  templateSlug: string;
  aiResponse: string;
  formData: string;
  createdAt: string;
};

export default function History() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/history");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setHistory(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleExpand = (id: number) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (loading) return <div className="p-4">Loading history...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (history.length === 0)
    return <div className="p-4">No history records found</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Generation History</h2>
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">Template</th>
              <th className="p-3 text-left">Input</th>
              <th className="p-3 text-left">Response</th>
              {/* <th className="p-3 text-left">Date</th>  */}
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{item.templateSlug}</td>
                <td
                  className="p-3 max-w-[200px] truncate"
                  title={item.formData}
                >
                  {item.formData}
                </td>
                <td className="p-3 max-w-[300px]">
                  <div className="whitespace-pre-wrap">
                    {expanded[item.id]
                      ? item.aiResponse
                      : `${item.aiResponse.substring(0, 100)}${
                          item.aiResponse.length > 100 ? "..." : ""
                        }`}
                  </div>
                  {item.aiResponse.length > 100 && (
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="text-blue-600 text-sm mt-1"
                    >
                      {expanded[item.id] ? "Show less" : "Show more"}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
