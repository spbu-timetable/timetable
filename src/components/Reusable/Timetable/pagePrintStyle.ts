const printStyle: string = `
                        @page { 
                            size: auto;  
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
                          margin: 0px; 
                          padding: 4px;
                          border: 1px solid black;
                        }
                        h5,h6 {
                          margin: 0px;
                          padding: 0px;  
                        }
                        div {
                          border-top: 1px solid black;
                          padding 2px;
                        }
                        div:first-child {
                          border: none;
                        }

                        }`;

export default printStyle;
