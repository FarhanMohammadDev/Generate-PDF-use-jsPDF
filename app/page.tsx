"use client"
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'; // Import the autoTable plugin

export default function Home() {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Use autoTable to generate a table in the PDF
    autoTable(doc, {
      head: [['ID', 'Name', 'Age']],
      body: [
        ['1', 'Alice', '30'],
        ['2', 'Bob', '25'],
        ['3', 'Charlie', '35'],
      ],
    });

    doc.save('generated.pdf');
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Hello</h1>
        <p>This content will be captured in the PDF.</p>

        {/* Button to generate PDF */}
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
