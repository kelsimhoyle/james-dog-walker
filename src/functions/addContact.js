import Airtable from "airtable";

var base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API_KEY }).base(process.env.GATSBY_AIRTABLE_BASE_ID);

const addContact = async (data) => {

 return await base('Contact').create([
  {
    "fields": data
  }
]);
 
}

export default addContact;