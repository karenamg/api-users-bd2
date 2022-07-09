const { Router } = require('express');
const router = Router();
const conn = require('../Config/DatabaseConfig');

//routes
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM Trabajadores';

    conn.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send('Not result');
    }
    });
});

module.exports = router;