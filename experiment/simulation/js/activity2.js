let act2_div;
function activity2() {
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    let text = `
      ${btn_text}
      <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act2-div'>
         <h3>Activity 2</h3>
         <h4>Infinite Long Hollow Cylinder</h4>

         <br>
         <br>
         
         <img src="./images/image2.png" style="width:25%;">
         <br>
         <br>
         <h4 style="text-align:left;">A. Rate of heat flow</h4>
         
         <p style="text-align:left;">
            The fourier's equation is

            $$
               \\frac{Q}{A} = -k\\frac{\∂T}{\∂r}
            $$

            <strong>Assumptions:</strong> <br>
            Length of the cylinder is infinite, &therefore; the temperature gradient can be neglected. k is constant.

            $$
               \\begin{aligned}
                  \∴ \\qquad \\frac{Q}{A} &= -k\\frac{dT}{dr} \\\\ \\\\
                  \\frac{Q}{A}dr &= -kdT
               \\end{aligned}
            $$

            <strong>Boundary conditions</strong>
            
            <p style="text-align : center;">
               at r = r<sub>1</sub> , &emsp; T = T<sub>1</sub> <br>
               at r = r<sub>2</sub> , &emsp; T = T<sub>2</sub>
            </p>

            $$
               \∴ \\qquad \∫_{r_1}^{r_2}\\frac{Q}{A}dr = - \∫_{T_1}^{T_2}kdT
            $$

            $$
               \\begin{aligned}
                  Q &\≠ f(x) \\quad \∵ \\text{steady state and no heat generation} \\\\
                  A &= f(r) = 2\πrL \\\\
                  k &\≠ f(T) \\quad \∵ \\text{k is constant}
               \\end{aligned}
            $$

            $$
               \\begin{aligned}
                  \∴ \\qquad \\frac{Q}{2\πL}\∫_{r_1}^{r_2}\\frac{dr}{r} &= -k \∫_{T_1}^{T_2}dT
                  \\\\ \\\\
                  \\frac{Q}{2\πL}[ln(r)]_{r_1}^{r_2} &= -k[T]_{T_1}^{T_2}
               \\end{aligned}
            $$

         </p>
         <br>
         <br>

         <div id="act2-q1-div">

         </div>
      <br><br>
      </div>
   `;
    maindiv.innerHTML += text;
    indx1_a2 = shuffleArray(opt1_a2, ans1_a2);
    let ques = `
      &therefore; &emsp; Q is given by :
   `;
    let q_div = document.getElementById('act2-q1-div');
    let question = new Question_Options(ques, opt1_a2, indx1_a2, q_div, 'act2-ques1', a2_load_section_B);
    question.load_question();
    question.get_question_element().querySelector('h5').style.fontSize = '20px';
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
    act2_div = document.getElementById('act2-div');
}
function a2_load_section_B() {
    act2_div.innerHTML += `
      <h4 style="text-align:left;">B. Temperature variation inside the cylinder</h4>

      <p style="text-align:left;">
         <strong>Boundary condition</strong>

         <p style="text-align : center;">
            &emsp; at r = R,&emsp; T = T<sub>R</sub>
         </p>

         $$
            \\begin{aligned}
               \∴ \\qquad Q &= \\frac{2\πLk}{ln(\\frac{R}{r_1})}(T_1 - T_R) \\\\ \\\\
         
               \∴ \\qquad Q &= \\frac{2\πLk}{ln(\\frac{R}{r_1})}(T_1 - T_R) = \\frac{2\πLk}{ln(\\frac{r_2}{r_1})}(T_1 - T_2)
            \\end{aligned}
         $$

      </p>
      <br>
      <br>
      <div id="act2-q2-div"></div>
      <br><br><br>
   `;
    indx2_a2 = shuffleArray(opt2_a2, ans2_a2);
    let ques = `
      $$
         \∴ \\quad \\frac{T_1 - T_R}{T_1 - T_2} \\quad \\text{is given by:}
      $$
   `;
    let q_div = document.getElementById('act2-q2-div');
    let question = new Question_Options(ques, opt2_a2, indx2_a2, q_div, 'act2-ques2', activity3);
    question.load_question();
    question.get_question_element().querySelector('h5').style.fontSize = '20px';
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity2();
//# sourceMappingURL=activity2.js.map