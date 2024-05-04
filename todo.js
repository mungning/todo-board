var todolist = [
    {
        "id": 1,
        "task": "กวาดบ้าน",
    },
    {
        "id": 2,
        "task": "ล้างจาน",
    },
    {
        "id": 3,
        "task": "ให้อาหารแมว",
    },
    {
        "id": 4,
        "task": "ดูหนัง",
    },
    {
        "id": 5,
        "task": "อ่านนิยาย",
    }
    ];

    exports.GetTask = function() {
        return todolist;
    };

    exports.GetTaskByID = function(id) {
        for (var i = 0; i < todolist.length; i++) {
            if (todolist[i].id == id) return todolist[i];
        }
    };

    exports.AppenData = function(newTodo){
        todolist.push(newTodo);
    }

    exports.Delete = function(id){
        todolist = todolist.filter(todo => todo.id !== parseInt(id));
    }