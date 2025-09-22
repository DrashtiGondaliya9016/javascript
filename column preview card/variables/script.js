var ele = document.getElementById('b');
console.log(ele);

var ele = document.getElementsByClassName('a');
console.log(ele);

var ele = document.getElementsByTagName("div");
console.log(ele);

var ele = document.images;
console.log(ele);

var button = document.querySelectorAll('button');
button[0].addEventListener('mouseover', function () {
        //    alert('You clicked the paragraph!');
        this.style.backgroundColor = 'red';
});

console.log('button', button);


var h1 = document.querySelectorAll('h1');
h1[0].addEventListener('mousemove', function () {
        //    alert('You clicked the paragraph!');
        this.style.backgroundColor = 'skyblue';
});

console.log('h1', h1);


var p = document.querySelectorAll('p');
p[0].addEventListener('mouseout', function () {
        //    alert('You clicked the paragraph!');
        this.style.backgroundColor = 'lightgreen';
});

console.log('p', p);

var images = document.querySelectorAll('img');
images[0].addEventListener('mouseover', function () {
        //    alert('You clicked the paragraph!');
        this.style.border = '2px solid blue';
        this.style.transform = 'scale(1.03)';
});

console.log('images', images);


images[0].addEventListener('mouseleave', function () {
        //    alert('You clicked the paragraph!');
        this.style.border = ' none';
        this.style.transform = 'scale(1)';
});

console.log('images', images);