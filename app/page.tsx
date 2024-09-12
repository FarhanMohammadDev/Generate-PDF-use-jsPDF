"use client"
import jsPDF from 'jspdf';
export default function Home() {
  const generatePDF = () => {
    const doc = new jsPDF();
  
    doc.text("Hello world!", 10, 10); 
    doc.save("example.pdf"); 
  };
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>PDF generation</h1>
        {/* Button to trigger PDF generation */}
        <button
          onClick={generatePDF}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Generate PDF
        </button>
      </main>
    </div>
  );
}
