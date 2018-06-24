
module.exports = force_redraw;

function force_redraw(dom_element){
  dom_element = dom_element || document.body;
  var store;
  var set_immediate = function(fn){ setTimeout(fn, 0)};
  set_immediate(function(){
    store = dom_element.style.display;
    dom_element.style.display = 'none';
    set_immediate(function(){
      dom_element.style.display = store;
    });
  });
}