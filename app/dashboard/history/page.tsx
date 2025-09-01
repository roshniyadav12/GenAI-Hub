// "use client";
// import { useEffect, useState } from "react";
// import { format } from "date-fns";
// import { parseISO } from "date-fns";
// type HistoryItem = {
//   id: number;
//   templateSlug: string;
//   aiResponse: string;
//   createdAt: string;
// };


// export default function History() {
//   const [history, setHistory] = useState<HistoryItem[]>([]);
//   const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

//   // useEffect(() => {
//   //   async function fetchHistory() {
//   //     try {
//   //       const response = await fetch("/api/history");
//   //       const data = await response.json();
  
//   //       console.log("API Response:", data); // Debugging step ✅
  
//   //       setHistory(data);
//   //     } catch (error) {
//   //       console.error("Error fetching history:", error);
//   //     }
//   //   }
//   //   fetchHistory();
//   // }, []);
//   useEffect(() => {
//     async function fetchHistory() {
//       const response = await fetch("/api/history");
//       const data = await response.json();
//       console.log("API Response:", data); 
//       setHistory(data);
//     }
//     fetchHistory();
//   }, []);

//   const toggleReadMore = (id: number) => {
//     setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   return (
//     <div className="p-4 bg-white ">
//       <h2 className="text-xl font-bold mb-4">History</h2>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-[#6D5BA8] text-white">
//             <th className="border p-2">Template</th>
//             <th className="border p-2">AI Response</th>
//             {/* <th className="border p-2">Date</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {history.map((item) => {
//             const isExpanded = expanded[item.id];
//             const previewText = item.aiResponse.split("\n").slice(0, 3).join("\n");
//             console.log("CreatedAt:", item.createdAt);
//             return (
//               <tr key={item.id} className="border">
//                 <td className="border p-2">{item.templateSlug}</td>
//                 <td className="border p-2">
//                   <p className="whitespace-pre-line">
//                     {isExpanded ? item.aiResponse : previewText}
//                   </p>
//                   {item.aiResponse.split("\n").length > 3 && (
//                     <button
//                       onClick={() => toggleReadMore(item.id)}
//                       className="text-blue-500 mt-1 underline"
//                     >
//                       {isExpanded ? "Read Less" : "Read More"}
//                     </button>
//                   )}
//                 </td>
//                 {/* <td className="border p-2">
//   {item.createdAt
//     ? format(new Date(item.createdAt), "dd/MM/yyyy") // Format as 26/03/2025
//     : "N/A"}
// </td> */}

// {/* <td className="border p-2">
//   {item.createdAt
//     ? format(parseISO(item.createdAt), "dd/MM/yyyy hh:mm:ss a") // Example: 26/03/2025 12:30:45 PM
//     : "N/A"}
// </td> */}



//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );

// }

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
        const response = await fetch('/api/history');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setHistory(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleExpand = (id: number) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  if (loading) return <div className="p-4">Loading history...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (history.length === 0) return <div className="p-4">No history records found</div>;

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
            {history.map(item => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{item.templateSlug}</td>
                <td className="p-3 max-w-[200px] truncate" title={item.formData}>
                  {item.formData}
                </td>
                <td className="p-3 max-w-[300px]">
                  <div className="whitespace-pre-wrap">
                    {expanded[item.id] 
                      ? item.aiResponse 
                      : `${item.aiResponse.substring(0, 100)}${item.aiResponse.length > 100 ? '...' : ''}`
                    }
                  </div>
                  {item.aiResponse.length > 100 && (
                    <button 
                      onClick={() => toggleExpand(item.id)}
                      className="text-blue-600 text-sm mt-1"
                    >
                      {expanded[item.id] ? 'Show less' : 'Show more'}
                    </button>
                  )}
                </td>
               {/* <td className="p-3 whitespace-nowrap">
                  {format(new Date(item.createdAt), 'MMM d, yyyy - h:mm a')}
                </td>  */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}