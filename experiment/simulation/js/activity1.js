let maindiv = (document.getElementById('pannelcreate'));
let act1_div;
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-22px fb-700">Conduction (Heat & Mass Transfer): Fundamentals of heat conduction</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act1-div'>
      <h3>Activity 1</h3>
      <h4>Infinite Slab</h4>

      <br>
      <br>
      
      <img src="./images/image1.png" style="width:15%;">
      <br>
      <br>
      <h4 style="text-align:left;">A. Rate of heat flow</h4>
      
      <p style="text-align:left;">
         Consider an infinite slab of thickness 'b' as shown in fig. Let faces of slab be maintain at T<sub>1</sub> & T<sub>2</sub>.<br>
         The fourier's equation for the heat flow along x-direction is 

         $$
            \\frac{Q}{A} = -k\\frac{\∂T}{\∂x}
         $$

         <strong>Assumptions:</strong> <br>
         As the length and width of the slab are infinte, the temperature gradient along  these direction can be neglected. Hence

         $$
            \\frac{Q}{A} = -k \\frac{dT}{dx}
         $$

         $$
            \\frac{Q}{A}dx = -kdT
         $$

         <strong>Boundary conditions</strong>
         
         <p style="text-align : center;">
            at x = 0, &emsp; T = T<sub>1</sub> <br>
            at x = b, &emsp; T = T<sub>2</sub>
         </p>

         $$
            \∴ \\qquad  \∫_0^b \\frac{Q}{A}dx = - \∫_{T_1}^{T_2}kdT
         $$
         
         $$
            \\begin{aligned}
               Q &\≠ f(x) \\quad \\because \\text{for steady state and no heat generation} \\\\

               A &\≠ f(x) \\quad \∵ \\text{infinte  slab} \\\\
               k &\≠ f(T) \\quad \∵ \\text{assumed k is constant} 
            \\end{aligned}
         $$

         $$
            \∴ \\qquad \\frac{Q}{A}\∫_0^bdx = -k\∫_{T_1}^{T_2}dT
         $$

         $$
            \\frac{Q}{A}[x]_0^b = -k[T]_{T_1}^{T_2}
         $$


      </p>
      <br>
      <br>

      <div id="act1-q1-div">

      </div>
      <br><br>
   </div>`;
    maindiv.innerHTML += text;
    indx1_a1 = shuffleArray(opt1_a1, ans1_a1);
    let ques = `
      &therefore; &emsp; Q is given by :
   `;
    let q_div = document.getElementById('act1-q1-div');
    let question = new Question_Options(ques, opt1_a1, indx1_a1, q_div, 'act1-ques1', a1_load_section_B);
    question.load_question();
    question.get_question_element().querySelector('h5').style.fontSize = '20px';
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
    act1_div = document.getElementById('act1-div');
}
function a1_load_section_B() {
    act1_div.innerHTML += `
      <h4 style="text-align:left;">B. Temperature variation within the slab</h4>

      <p style="text-align:left;">
         <strong>Boundary condition</strong>

         <p style="text-align : center;">
            &emsp; at x = X,&emsp; T = T<sub>x</sub>
         </p>

         $$
            \\begin{aligned}
               \∴ \\qquad Q &= \\frac{kA}{X}(T_1 - T_x) \\\\ \\\\
         
               \∴ \\qquad Q &= \\frac{kA}{X}(T_1 - T_x) = \\frac{kA}{b}(T_1 - T_2)
            \\end{aligned}
         $$

      </p>
      <br>
      <br>
      <div id="act1-q2-div"></div>
      <br><br><br>
   `;
    indx2_a1 = shuffleArray(opt2_a1, ans2_a1);
    let ques = `
      $$
         \∴ \\quad \\frac{T_1 - T_x}{T_1 - T_2} \\quad \\text{is given by:}
      $$
   `;
    let q_div = document.getElementById('act1-q2-div');
    let question = new Question_Options(ques, opt2_a1, indx2_a1, q_div, 'act1-ques2', activity2);
    question.load_question();
    question.get_question_element().querySelector('h5').style.fontSize = '20px';
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function activity_completed(btn) {
    btn && btn.remove();
    alert('Experiment Completed');
}
//this function is to shuffle the elements of the array
//for options array to shuffle the options in Question_option class
//it accepts options array and correct answer so after shuffling it can find the correct index and return it as a string
function shuffleArray(arr, ans) {
    arr.sort(() => Math.random() - 0.5);
    return (arr.indexOf(ans) + 1).toString();
}
activity1();
//# sourceMappingURL=activity1.js.map