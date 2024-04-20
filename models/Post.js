const db = require('../config/db');
class Post {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }

    async save() {
        let date = new Date();
        let year = date.getFullYear();
        let mm = date.getMonth() + 1;
        let dd = date.getDate();
        let cdate = `${year}-${mm}-${dd}`;
        console.log(cdate);
        let sql = `INSERT INTO posts(
            title,
            body,
            created_at
        )
        VALUES(
            '${this.title}',
           '${this.body}',
            '${cdate}'
        )
        `;
        return db.execute(sql);
    }

    static  findAll (){
        let sql ="SELECT * FROM posts";
        return db.execute(sql);
    }

    static  findById (id){
        let sql =`SELECT * FROM posts WHERE id = ${id}`;
        return db.execute(sql);
    }
}

module.exports = Post;