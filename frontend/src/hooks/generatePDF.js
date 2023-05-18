function generatePDF(tickets) {
  const doc = new jspdf();
  const tableColumn = [
    "Item ID",
    "Name",
    "Description",
    "Price",
    "exp",
    "mfd",
    "category",
    "quantity",
  ];
  const tableRows = [];

  tickets
    .slice(0)
    .reverse()
    .map((ticket) => {
      const ticketData = [
        ticket.itemId,
        ticket.name,
        ticket.description,
        ticket.price,
        ticket.exp,
        ticket.mfd,
        ticket.category,
        ticket.quantity,
      ];
      tableRows.push(ticketData);
    });

  doc.autoTable(tableColumn, tableRows, {
    styles: { fontSize: 8 },
    startY: 35,
  });
  const date = Date().split(" ");
  const dateStr = date[1] + "-" + date[2] + "-" + date[3];
  doc.text("stock-Details-Report", 14, 15).setFontSize(12);
  doc.text(`Report Generated Date - ${dateStr} `, 14, 23);
  doc.save(`Stock-Details-Report_${dateStr}.pdf`);
}
