import { db } from "lib/firebase";
export default async (req, res) => {
    const {
        name
    } = req.body;

    return await db
    .collection("actividades")
    .doc()
    .set(
        {
            name,
            tipo
        }
    )
    .then(() => {
        console.log("Firebase 4 - Crear actividad");
        res.status(200).json({ message: 'Actividad creada', name})
        res.end();
    })
    .catch((error) => {
        console.error('Error de firebase', error);
        res.status(error.status || 500).json({
            code: error.code,
            error: error.message,
        });
    });
  }
  