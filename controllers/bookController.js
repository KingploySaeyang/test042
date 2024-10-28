// Import Model
const Books = require("../models/books");
// Function add and export
exports.addbook = async(req, res) => {
        const {title, author, published_year, genre, available} = req.body;
        const book = new Books({title, author, published_year, genre, available});
    try{  
        const newBooks = await book.save();
        res.status(201).json(newBooks);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};
// Function update and export
// ฟังก์ชัน updatebook ที่แก้ไขแล้ว
exports.updatebook = async(req, res) => {
    try { 
        const {id} = req.params;
        const book = await Books.findById(id);
        if(!book) return res.status(404).json({message: 'Book not found'});

        const update = req.body;
        Object.assign(book, update);

        const updatedBook = await book.save(); // ใช้ book.save() แทน Books.save()
        res.json(updatedBook);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

/*exports.updatebook = async(req, res) => {
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
    };*/

// Function delete and export
// ฟังก์ชัน deletebook ที่แก้ไขแล้ว
exports.deletebook = async(req, res) => {
    try {
        const book = await Books.findById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });

        await Books.findByIdAndDelete(req.params.id); // ใช้ findByIdAndDelete แทน
        res.json({ message: 'Book Deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

/*exports.deletebook = async(req, res) => {
    try{
        const book = await Books.findById(req.params.id);
        if(!book) return res.status(404).json({message: 'Books not found'});
        await book.remove();
        res.json({message: 'Book Deleted'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
};*/

// Function get all data and export
// ฟังก์ชัน getbookAll ที่แก้ไขแล้ว
exports.getbookAll = async(req, res) => {
    try { 
        const books = await Books.find(); // เปลี่ยน book เป็น books เพื่อบ่งบอกว่าเป็นหลายเล่ม
        res.status(200).json(books); // ส่ง books แทนการส่งโมเดล Books
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

/*exports.getbookAll = async(req, res) => {
 try{ 
    const book = await Books.find();
    res.status(200).json(Books);
}catch(err){
    res.status(500).json({message: err.message});
}
};*/

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