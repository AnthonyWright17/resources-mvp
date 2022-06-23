const express = require('express');
const cors = require('cors')
const db = require('./Backend/dbConfig.js');


const PORT = 5000;

const app = express();

app.use(express.json())
app.use(cors())

app.get('/', async(req, res) => {
  try {

    const {rows} = await db.query('SELECT * FROM resources;')
    res.json(rows)

  } catch (error) {
    console.log(error)
  }

})

app.post('/add', async (req, res) => {
  try {

    const {title, poster, cohort, description, url} = req.body;

    const {rows} = await db.query(
      'INSERT INTO resources (title, url, poster, cohort, description) VALUES($1, $2, $3, $4, $5) RETURNING *;',
      [title, url, poster, cohort, description])

      res.json(rows[0])

  } catch (error) {
    console.log(errror)
  }
})
app.delete('/delete', async (req, res) => {
  try {
    const { id } = req.body;

    const {rows} = await db.query('DELETE FROM resources WHERE id = $1 RETURNING id;', [id])

    res.json(rows[0])

  } catch (error) {
    console.log(error)
  }
})

app.put('/edit', async (req, res) => {
  try {

    const id = parseInt(req.body.id)

    const resourceToUpdate = await db.query('SELECT * FROM resources WHERE id =$1', [id])

    const title = req.body.title ||  resourceToUpdate.rows[0].title 
    const url = req.body.url ||  resourceToUpdate.rows[0].url 
    const poster = req.body.poster ||  resourceToUpdate.rows[0].poster 
    const cohort = req.body.cohort ||  resourceToUpdate.rows[0].cohort 
    const description = req.body.description|| resourceToUpdate.rows[0].description  

    const update = await db.query('UPDATE resources SET title=$1, url=$2, poster=$3, cohort=$4, description=$5 WHERE id = $6 RETURNING *;', [title, url, poster, cohort, description, id])

    res.json(update.rows[0])

  } catch (error) {
    console.log(error)
  }
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))