const express = require('express');
const userRoutes = require('./routes/user.routes');
const taskRoutes = require('./routes/task.routes');
const config = require('./config');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);


app.listen(config.port, () => {
    console.log(`Server on port ${config.port}`);
}
);