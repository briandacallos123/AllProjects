const arrayElement = [];
let toBottom = document.querySelector('.section_sub_main_indent_left_heading');
let toLeft = document.querySelector('.section_sub_main_indent_left_paragraph');
let toLeft2 = document.querySelector('.section_sub_main_indent_left_paragraph_2');
let toTop = document.querySelector('.section_sub_main_indent_left_comment');
let spanTag = document.querySelector('.section_sub_main_indent_left_span');
let pic = document.querySelector('.section_sub_main_indent_right');
let preFooter = document.querySelector('.container_indent_left');
let footer = document.querySelector('.myfooter');

arrayElement[0] = toBottom;
arrayElement[1] = toLeft;
arrayElement[2] = toLeft2;
arrayElement[3] = toTop;
arrayElement[4] = spanTag;
arrayElement[5] = pic;
arrayElement[6] = preFooter;


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        if(entry.isIntersecting)observer.unobserve(entry.target)
    })
}, {
    threshold:1
})


arrayElement.forEach(item =>{
    observer.observe(item)
})