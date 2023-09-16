import React from "react";
import { PDFDocument, rgb } from 'pdf-lib';
import { saveAs } from 'file-saver';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const DownloadPdf = (props) => {
    async function generatePDF() {
        
        const currentDate = props.date;
        const noteData = props.text;
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([400, 400]);
        const textContent = `Note: ${noteData}`;
        page.drawText(textContent, {
          x: 50,
          y: 350,
          size: 14,
          color: rgb(0, 0, 0),
        });

        const dateTextContent = `Date: ${currentDate}`;
        page.drawText(dateTextContent, {
          x: 50,
          y: 50,
          size: 12, 
          color: rgb(0, 0, 0),
        });

        const pdfBytes = await pdfDoc.save();
      
        const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
      
        saveAs(pdfBlob, 'note.pdf');
      }

    return (
        <div style={{width: '30px', heigh: '30px'}}>
            <FileDownloadIcon onClick={generatePDF}></FileDownloadIcon>
        </div>
        
    )
}

export default DownloadPdf;