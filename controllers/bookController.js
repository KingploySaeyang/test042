// Import Model
const Books = require("../models/books");
// Function add and export
exports.addbook = async(req, res) => {
        const {title, author, published_year, genre, available} = req.body;
        const book = new Books({title, author, published_year, genre, available});
    try{  
        const newBooks = await book.save();
        res.status(201).json(saveBooks);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};
// Function update and export
exports.updatebook = async(req, res) => {
    try{ 
        const {id} = req.params;
        const book = await Books.findById(id);
        if(!book) return res.status(404).json({message: 'Books not found'});
        const update = res.body;
        Object.assign(book, update);
        const updatebook = await Books.save();
        res.json(updatebook);
    }catch(err){
        res.status(500).json({message: err.message});
    }
    };
/*exports.updatebook = async(req, res) => {
try{ 
    const {title, author, published_year, genre, available} = req.body;
    const book = await Books.findById(req.params.id);
    if(!book) return res.status(404).json({message: 'Books not found'});
    res.status(201).json(saveBooks);
}catch(err){
    res.status(500).json({message: err.message});
}
};*/

// Function delete and export
exports.deletebook = async(req, res) => {
    try{
        const book = await Books.findById(req.params.id);
        if(!book) return res.status(404).json({message: 'Books not found'});
        await Books.remove();
        res.json({message: 'Book Deleted'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

// Function get all data and export
exports.getbookAll = async(req, res) => {
 try{ 
    const book = await Books.find();
    res.status(200).json(Books);
}catch(err){
    res.status(500).json({message: err.message});
}
};

// Function get data by genre and export
exports.getbookOne = async(req, res) => {
    try{ 
        const {genre} = req.body;
        const book = await Books.findOne({genre});
        if(!book) return res.status(404).json({message: 'Books not found'});
        res.status(200).json(book);
    }catch(err){
        res.status(500).json({message: err.message});
    }
   };