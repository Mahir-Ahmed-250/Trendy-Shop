

const addToDataBase = item => {
    const db = getDataBase();
    if (item in db) {
        db[item] = db[item] + 1
    }
    else {
        db[item] = 1
    }
    saveToDb(db)
}

const removeFromDb = item => {
    const db = getDataBase()
    delete db[item]
    saveToDb(db)
}

const saveToDb = db => {
    const dbJSON = JSON.stringify(db)
    localStorage.setItem('shopping-cart', dbJSON)
}
const getDataBase = () => {
    let savedDb = {};
    if (savedDb) {
        let savedDb = localStorage.getItem('shopping-cart')
        savedDb = JSON.parse(savedDb)
        return savedDb
    }
    else {
        return savedDb
    }
}