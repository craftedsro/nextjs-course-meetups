import { InsertToMeetupsCollection } from "../../util/db";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    res.status(404).json({ message: "Not supported method!" });
    return;
  }

  const data = req.body;

  let { title, image, address, description } = data;

  title = title.trim();
  image = image.trim();
  address = address.trim();
  description = description.trim();

  if (!title || !image || !address || !description) {
    res.status(422).json({ message: "One of data is empty" });
    return;
  }

  const newMeetup = {
    title,
    image,
    address,
    description,
  };

  const result = await InsertToMeetupsCollection(newMeetup); // meetupsCollection.insertOne(newMeetup);

  res
    .status(201)
    .json({ message: "Meetup added successfully!", id: result.insertedId });
};

export default handler;
