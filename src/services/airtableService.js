import Airtable from "airtable";

const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY;
const base = new Airtable({ apiKey }).base(process.env.REACT_APP_AIRTABLE_BASE);

export const fetchFromAirtable = async (id) => {
  const records = await base("Sheet1")
    .select({
      fields: ["Id", "Namn", "isPersonal", "Creator"],
      filterByFormula: `{Id} = '${id}'`,
    })
    .firstPage();

  return records.length > 0
    ? {
        namn: records[0].get("Namn"),
        isPersonal: records[0].get("isPersonal"),
        creator: records[0].get("Creator"),
      }
    : null;
};

export const saveToAirtable = async (id, username, isPersonal) => {
  await base("Sheet1").create({
    Id: id,
    Namn: username,
    isPersonal,
    Creator: false,
  });
};
