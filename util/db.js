import { MongoClient, ObjectId } from "mongodb";

export const ConnectToDatabase = async () => {
  return await MongoClient.connect(
    "mongodb+srv://meetup-app:E2KHODhgajUu9J05@cluster0.ivppj.mongodb.net/meetups?retryWrites=true&w=majority"
  );
};

export const GetMeetupsCollection = async (filter = null, type = null) => {
  const client = await ConnectToDatabase();
  const meetupsCollection = await client.db().collection("meetups");

  const meetups = await meetupsCollection.find(filter, type).toArray();

  await client.close();

  return meetups;
};

export const InsertToMeetupsCollection = async (data) => {
  const client = await ConnectToDatabase();
  const meetups = await client.db().collection("meetups");

  const result = await meetups.insertOne(data);

  await client.close();

  return result;
};

export const GetMeetup = async (id) => {
  const client = await ConnectToDatabase();
  const meetups = await client.db().collection("meetups");

  const result = await meetups.findOne({ _id: ObjectId(id) });

  await client.close();

  return result;
};
