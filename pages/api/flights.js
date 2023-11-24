import { flights } from "../../data/flights";

export default function handler(req, res) {
  res.status(200).json(flights);
}
