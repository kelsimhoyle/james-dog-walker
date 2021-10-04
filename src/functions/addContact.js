import Airtable from "airtable";

var base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API_KEY }).base(process.env.GATSBY_AIRTABLE_BASE_ID);

const addContact = async (data) => {

  const contactCreate = await base('Contact').create([
    {
      "fields": data
    }
  ]);

  return contactCreate;

}

export default addContact;