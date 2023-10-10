import createClient from "@sanity/client";

const client = createClient({
  projectId: "10j7vps6",
  dataset: "production",
});

export default client;
