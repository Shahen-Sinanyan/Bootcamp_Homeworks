// const profileInfo = new ProfileInfo();
// profileInfo.setUsername(‘username’);
// profileInfo.getUsername(‘username’);
// profileInfo.setEmail(‘abc@example.com’);
// profileInfo.getEmail(‘abc@example.com’)
// profileInfo.setAddress(‘The user address’);
// profileInfo.getEmail()



// const user = new User();
// user.setName(‘John’); 
// user.getName();
// user.setAge(63);
// user.getAge();
// user.setProfileInfo(new ProfileInfo());
// user.getProfileInfo();
function ProfileInfo () {
    this.setUsername = function (username) {
        this.username = username;
    };
    this.getUsername = function () {
        return this.username;
    };
    this.setEmail = function (email) {
        this.email = email;
    };
    this.getEmail = function () {
        return this.email;
    }
};

function User () {
    this.setName = function (name) {
        this.name = name;
    };
    this.getName = function () {
        return this.name;
    };
    this.setAge = function (age) {
        this.age = age;
    };
    this.getAge = function () {
        return this.age;
    };
    this.setProfileInfo = function (constructorFn) {
        this.profileInfo = constructorFn;
    };
    this.getProfileInfo = function () {
        return this.profileInfo;
    }
};


 const user = new User()
user.setProfileInfo(new ProfileInfo ())