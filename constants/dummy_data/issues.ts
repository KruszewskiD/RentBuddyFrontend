import { TIssue } from "@/types/TIssue";

export const issues:TIssue[] = [
    {
      issue_id: 1,
      property_id: 101,
      tenant_id: 201,
      owner_id: 2,
      title: "Przeciekający kran w łazience",
      description: "Woda kapie z kranu w łazience, nawet po zakręceniu.",
      resolve_status: "pending",
      date: "2024-02-01T08:30:00Z"
    },
    {
      issue_id: 2,
      property_id: 102,
      tenant_id: 202,
      owner_id: 3,
      title: "Awaria ogrzewania",
      description: "Kaloryfery nie działają mimo ustawienia maksymalnej temperatury.",
      resolve_status: "in_progress",
      date: "2024-02-03T15:45:00Z"
    },
    {
      issue_id: 3,
      property_id: 103,
      tenant_id: 203,
      owner_id: 4,
      title: "Brak ciepłej wody",
      description: "Od kilku dni z kranu leci tylko zimna woda.",
      resolve_status: "resolved",
      date: "2024-02-05T10:15:00Z"
    },
    {
      issue_id: 4,
      property_id: 104,
      tenant_id: 204,
      owner_id: 5,
      title: "Zamek w drzwiach się zacina",
      description: "Ciężko przekręcić klucz w zamku, czasem nie można otworzyć drzwi.",
      resolve_status: "pending",
      date: "2024-02-07T18:20:00Z"
    },
    {
      issue_id: 5,
      property_id: 105,
      tenant_id: 2,
      owner_id: 3,
      title: "Pleśń na ścianie w sypialni",
      description: "Pojawiła się pleśń na ścianie przy oknie.",
      resolve_status: "pending",
      date: "2024-02-10T09:00:00Z"
    },
    {
      issue_id: 6,
      property_id: 106,
      tenant_id: 3,
      owner_id: 2,
      title: "Zatkany odpływ w kuchni",
      description: "Woda bardzo wolno spływa z zlewu w kuchni.",
      resolve_status: "resolved",
      date: "2024-02-12T14:30:00Z"
    },
    {
      issue_id: 7,
      property_id: 107,
      tenant_id: 207,
      owner_id: 4,
      title: "Przepalone światło na klatce schodowej",
      description: "Żarówka na klatce schodowej nie działa, jest ciemno przy wejściu.",
      resolve_status: "pending",
      date: "2024-02-15T19:10:00Z"
    },
    {
      issue_id: 8,
      property_id: 108,
      tenant_id: 208,
      owner_id: 5,
      title: "Uszkodzony włącznik światła",
      description: "Przycisk włącznika w kuchni nie działa poprawnie.",
      resolve_status: "in_progress",
      date: "2024-02-18T11:45:00Z"
    },
    {
      issue_id: 9,
      property_id: 109,
      tenant_id: 209,
      owner_id: 2,
      title: "Hałas od sąsiadów",
      description: "Sąsiedzi regularnie hałasują w nocy, utrudniając sen.",
      resolve_status: "pending",
      date: "2024-02-20T22:30:00Z"
    },
    {
      issue_id: 10,
      property_id: 110,
      tenant_id: 210,
      owner_id: 3,
      title: "Nieszczelne okna",
      description: "Z okien wieje zimne powietrze, uszczelki są w złym stanie.",
      resolve_status: "resolved",
      date: "2024-02-22T16:00:00Z"
    }
  ];
  