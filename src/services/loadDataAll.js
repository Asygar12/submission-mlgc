const { Firestore } = require("@google-cloud/firestore");

async function getDataAll() {
  const db = new Firestore();
  const snapshotData = await db.collection("prediction").get();
  const allData = [];
  snapshotData.forEach((doc) => {
    allData.push({
      id: doc.id,
      history: doc.data(),
    });
  });
  return allData;
}

module.exports = getDataAll;