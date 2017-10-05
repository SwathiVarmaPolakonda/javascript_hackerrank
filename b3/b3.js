function action(e) {
                /* Older IE browsers have a srcElement property,
                but other browsers have a 'target' property;
                Set btn to whichever exists. */
                var btn = e.target || e.srcElement;

                /* Get the clicked element's innerHTML */
                document.getElementById(btn.id).innerHTML++;
            }

            /* Set each button to call action(e) when clicked */
        
            document.getElementById('btn1').addEventListener('click', action);
            document.getElementById('btn2').addEventListener('click', action);
            document.getElementById('btn3').addEventListener('click', action);
            document.getElementById('btn4').addEventListener('click', action);
