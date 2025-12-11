const getStudents = (req, res) => {
    let stdData = { name: "joseph", roll: "344" };
    res.status(200).json({ data: stdData });
};

const addStudents = (req, res) => {
    res.status(201).json({ message: "data added in" });
};

export { getStudents, addStudents };


