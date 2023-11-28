// export const flights = [
//   {
//     localTime: "current_local_time",
//     city: "source_city",
//     date: "source_date",
//     details: [
//       {
//         title: "scheduled_departure",
//         subtitle: "source_scheduled_departure_time",
//       },
//       { title: "terminal", subtitle: "source_terminal_number" },
//       { title: "gate", subtitle: "source_gate_number" },
//     ],
//   },
//   {
//     city: "destination_city",
//     date: "destination_date",
//     details: [
//       {
//         title: "scheduled_arrival",
//         subtitle: "destination_scheduled_arrival_time",
//       },
//       { title: "terminal", subtitle: "destination_terminal_number" },
//       { title: "gate", subtitle: "destination_gate_number" },
//     ],
//   },
// ];

export const flights = [
  {
    en: [
      {
        current_local_time: "Current Local Time",
        city: "New Delhi",
        date: "Tue, 21st Nov",
        details: [
          { title: "Scheduled Departure", subtitle: "4:00 am[IST]" },
          { title: "Terminal", subtitle: "3" },
          { title: "Gate", subtitle: "12" },
        ],
      },
      {
        city: "San Francisco",
        date: "Tue, 21st Nov",
        details: [
          { title: "Scheduled Arrival", subtitle: "6:00 am[PST]" },
          { title: "Terminal", subtitle: "1" },
          { title: "Gate", subtitle: "23A" },
        ],
      },
    ],
  },
  {
    hi: [
      {
        current_local_time: "वर्तमान स्थानीय समय",
        city: "नई दिल्ली",
        date: "मंगल, 21 नवंबर",
        details: [
          { title: "निर्धारित प्रस्थान", subtitle: "4:00 am[IST]" },
          { title: "टर्मिनल", subtitle: "3" },
          { title: "गेट", subtitle: "12" },
        ],
      },
      {
        city: "सैन फ्रांसिस्को",
        date: "मंगल, 21 नवंबर",
        details: [
          { title: "निर्धारित पहुंच", subtitle: "6:00 am[PST]" },
          { title: "टर्मिनल", subtitle: "1" },
          { title: "गेट", subtitle: "23A" },
        ],
      },
    ],
  },
  {
    es: [
      {
        current_local_time: "Hora Local Actual",
        city: "Nueva Delhi",
        date: "Mar, 21 Nov",
        details: [
          { title: "Salida Programada", subtitle: "4:00 am[IST]" },
          { title: "Terminal", subtitle: "3" },
          { title: "Puerta", subtitle: "12" },
        ],
      },
      {
        city: "San Francisco",
        date: "Mar, 21 Nov",
        details: [
          { title: "Llegada Programada", subtitle: "6:00 am[PST]" },
          { title: "Terminal", subtitle: "1" },
          { title: "Puerta", subtitle: "23A" },
        ],
      },
    ],
  },
];
