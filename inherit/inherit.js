
function Person(name,gender,age){
	this.name = name;
	this.gender = gender;
	this.age = age;
}

Person.prototype.eat = function(food){
	console.log('I am hungry, I am eating'+ (food || ''));
}

Person.prototype.sleep = function(){
	console.log('I am sleeping');
}


function Student(name,gender,age){
	Person.call(this,name,gender,age);
}

Student.prototype = new Person();

Student.prototype.constructor = Student;

Student.prototype.goSchool = function(){
	console.log('I go to School');
}

function Teacher(name,gender,age){
	Person.call(this,name,gender,age);
}

Teacher.prototype = new Person();

Teacher.prototype.checkStudent = function(st){
	if(st instanceof Student){
		console.log('Teacher speak:',st.name,'Student:','here');
		return true;
	}
	console.log('Teacher speak: ','na sha','Student:','not here');
	return false;
}


var xiaoming = new Student('xiaoming','man','12');
var laoshi = new Teacher('laoshi','girl','15');
xiaoming.eat('banana');
xiaoming.goSchool();
laoshi.checkStudent(xiaoming);
laoshi.checkStudent();

