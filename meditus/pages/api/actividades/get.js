import { db } from "lib/firebase";
export default async (req, res) => {
    db.collection("actividades")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        res.status(200).json({ message: 'Trajo las actividades, mira la consola man'})
        res.end();
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        res.status(error.status || 500).json({
            code: error.code,
            error: error.message,
        });
    });
  }
  