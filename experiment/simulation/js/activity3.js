let act3_div;
function activity3() {
    let btn_text = get_collapse_btn_text('Activity 3', 'act3-div');
    let text = `
      ${btn_text}
      <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act3-div'>
         <h3>Activity 3</h3>
         <h4>Hollow Sphere</h4>

         <br>
         <br>
         
         <img src="./images/image2.png" style="width:25%;">
         <br>
         <br>
         <h4 style="text-align:left;">A. Rate of heat flow</h4>
         
         <p style="text-align:left;">
            $$
               \\frac{Q}{A} = -k\\frac{\∂T}{\∂r}
            $$

            <strong>Assumptions:</strong> <br>

            $$
               \\begin{aligned}
                  T &= f(r)
                  \\\\ \\\\
                  \∴ \\qquad \\frac{Q}{A} &= -k\\frac{dT}{dr} 
               \\end{aligned}
            $$

            <strong>Boundary conditions</strong>
            
            <p style="text-align : center;">
               at r = r<sub>1</sub> , &emsp; T = T<sub>1</sub> <br>
               at r = r<sub>2</sub> , &emsp; T = T<sub>2</sub>
            </p>

            $$
               \∴ \\qquad 
               \∫_{r_1}^{r_2}\\frac{Q}{A}dr = - \∫_{T_1}^{T_2}kdT
            $$

            $$
               \\begin{aligned}
                  Q &\≠ f(r) \\quad \∵ \\text{steady state and no heat generation} \\\\
                  A &= f(r) = 4\πr^2 \\\\
                  k &\≠ f(T) \\quad \∵ \\text{k is constant}
               \\end{aligned}
            $$

            $$
               \\begin{aligned}
                  \∴ \\qquad \\frac{Q}{4\π}\∫_{r_1}^{r_2}\\frac{dr}{r^2} &= -k \∫_{T_1}^{T_2}dT
                  \\\\ \\\\
                  \\frac{Q}{4\π}\\left[\\frac{-1}{r}\\right]_{r_1}^{r_2} &= -k[T]_{T_1}^{T_2}
               \\end{aligned}
            $$

         </p>
         <br>
         <br>

         <div id="act3-q1-div">

         </div>
      <br><br>
      </div>
   `;
    maindiv.innerHTML += text;
    indx1_a3 = shuffleArray(opt1_a3, ans1_a3);
    let ques = `
      &therefore; &emsp; Q is given by :
   `;
    let q_div = document.getElementById('act3-q1-div');
    let question = new Question_Options(ques, opt1_a3, indx1_a3, q_div, 'act3-ques1', a3_load_section_B);
    question.load_question();
    question.get_question_element().querySelector('h5').style.fontSize = '20px';
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act3-div');
    }, 150);
    act3_div = document.getElementById('act3-div');
}
function a3_load_section_B() {
    act3_div.innerHTML += `
      <h4 style="text-align:left;">B. Temperature variation within sphere</h4>

      <p style="text-align:left;">
         <strong>Boundary condition</strong>

         <p style="text-align : center;">
            &emsp; at r = R,&emsp; T = T<sub>R</sub>
         </p>

         $$
            \∴ \\qquad  Q = \\frac{4\πk(T_1 - T_R)}{\\frac{1}{r_1} - \\frac{1}{R}}
         $$

         <p style="text-align:left;">Now,</p>

         $$
            Q = \\frac{4\πk(T_1 - T_R)}{\\frac{1}{r_1} - \\frac{1}{R}} = \\frac{4\πk(T_1 - T_2)}{\\frac{1}{r_1} - \\frac{1}{r_2}}
         $$

      </p>
      <br>
      <br>
      <div id="act3-q2-div"></div>
      <br><br><br>
   `;
    indx2_a3 = shuffleArray(opt2_a3, ans2_a3);
    let ques = `
      $$
         \∴ \\quad \\frac{T_1 - T_R}{T_1 - T_2} \\quad \\text{is given by:}
      $$
   `;
    let q_div = document.getElementById('act3-q2-div');
    let question = new Question_Options(ques, opt2_a3, indx2_a3, q_div, 'act3-ques2', activity_completed);
    question.load_question();
    question.get_question_element().querySelector('h5').style.fontSize = '20px';
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity3();
//# sourceMappingURL=activity3.js.map