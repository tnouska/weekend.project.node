let express = require('express');
let app = express();
const PORT = 5001;
app.use(express.static('server/public'));
app.listen(PORT, () => {
console.log('app is running on port 5001. ^C to quit');

});