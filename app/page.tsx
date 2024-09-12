"use client"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useRef } from 'react';

export default function Home() {
  const componentRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    const input = componentRef.current;
    if (input) {
      const canvas = await html2canvas(input); // Capture the component as a canvas
      const imgData = canvas.toDataURL('image/png'); // Convert the canvas to an image
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 page width in mm
      // const pageHeight = 295; // A4 page height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('generated.pdf'); // Save the PDF
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main ref={componentRef} className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Hello</h1>
        <p>This content will be captured in the PDF.</p>
        
        {/* Table component */}
        <table className="table-auto border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">ID</th>
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2">1</td>
              <td className="border border-gray-400 px-4 py-2">Alice</td>
              <td className="border border-gray-400 px-4 py-2">30</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">2</td>
              <td className="border border-gray-400 px-4 py-2">Bob</td>
              <td className="border border-gray-400 px-4 py-2">25</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">3</td>
              <td className="border border-gray-400 px-4 py-2">Charlie</td>
              <td className="border border-gray-400 px-4 py-2">35</td>
            </tr>
          </tbody>
        </table>
      </main>
      
      {/* Button to generate PDF */}
      <button
        onClick={generatePDF}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Generate PDF
      </button>
    </div>
  );
}
