const printStyle: string = `
                        @page { 
                            size: A4;
                            margin: 0mm;
                        } 

                        @media print { 
                        body { 
                         -webkit-print-color-adjust: exact; 
                         height: 100vh; 
                        } 
                        table {
                          border-collapse: collapse;
                          table-layout: auto;
                          min-width: 95vw;
                        
                          width: 100%;
                          margin-bottom: 4px; 
                          padding: 0;
                        }
                        tr {
                          margin: 0px; 
                          padding: 0px;
                        }
                        td {
                          font-size: 10px;
                          margin: 0px; 
                          padding: 4px;
                          border: 1px solid black;
                        }
                        h5 {
                          font-size: 12px;
                          margin: 0px;
                          padding: 0px;  
                        }
                        div {
                          font-size: 10px;
                          border-top: 1px solid black;
                          padding: 12px 0;
                        }
                        div:first-child {
                          border: none;
                          padding-top: 0;
                        }
                        div:last-child {
                          padding-bottom: 0;
                        }

                        }`;

export default printStyle;
