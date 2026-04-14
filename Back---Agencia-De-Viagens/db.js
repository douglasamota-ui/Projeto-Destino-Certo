import postgres from "postgres";

const sql = postgres("postgres://postgres:senaisp@192.168.1.52:5432/DestinoCerto");

export default sql;
