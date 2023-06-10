function calculate(){
  
  // 1. init & validate
  const a = input.group('number_a_', 'a.b|c.d!0|e.f!0');
  const b = input.group('number_b_', 'a!0.b|c!0.d|e.f');
  const c = input.group('number_c_', 'a.b!0|c.d|e.f!0');
  const d = input.group('number_d_', 'a.b|c!0.d|e.f');
  const e = input.group('number_e_', 'a.b|c.d|e.f');
  if(!input.valid()) return;

  // 2. calculate
  let result = {a:[],b:[],c:[],d:[],e:[]};
  if(a){
    if(a.a!=null && a.b!=null) result.a.push(`${a.a*a.b/100} is ${a.a}% of ${a.b}`);
    if(a.c!=null && a.d!=null) result.a.push(`${a.c} is ${a.c/a.d*100}% of ${a.d}`);
    if(a.e!=null && a.f!=null) result.a.push(`${a.e} is ${a.f}% of ${a.e/a.f*100}`);
  }
  if(b){
    if(b.a!=null && b.b!=null) result.b.push(`${b.b/b.a*100}% of ${b.a} is ${b.b}`);
    if(b.c!=null && b.d!=null) result.b.push(`${b.c}% of ${b.d/b.c*100} is ${b.d}`);
    if(b.e!=null && b.f!=null) result.b.push(`${b.e}% of ${b.f} is ${b.e*b.f/100}`);
  }
  if(c){
    if(c.a!=null && c.b!=null) result.c.push(`${c.a} out of ${c.a/c.b*100} is ${c.b}%`);
    if(c.c!=null && c.d!=null) result.c.push(`${c.c*c.d/100} out of ${c.c} is ${c.d}%`);
    if(c.e!=null && c.f!=null) result.c.push(`${c.e} out of ${c.f} is ${c.e/c.f*100}%`);
  }
  if(d){
    if(d.a!=null && d.b!=null) result.d.push(`${d.a} plus ${d.b}% is ${d.a*(1+d.b/100)}`);
    if(d.c!=null && d.d!=null) result.d.push(`${d.c} plus ${(d.d-d.c)/d.c*100}% is ${d.d}`);
    if(d.e!=null && d.f!=null) {
      try{
        result.d.push(`${calc(d.f/(1+d.e/100))} plus ${d.e}% is ${d.f}`);
      }
      catch(error){
        input.exception('number_d_e', error); return;
      }
    }
  }
  if(e){
    if(e.a!=null && e.b!=null) result.e.push(`${e.a} minus ${e.b}% is ${e.a*(1-e.b/100)}`);
    if(e.c!=null && e.d!=null) result.e.push(`${e.c} minus ${(e.c-e.d)/e.c*100}% is ${e.d}`);
    if(e.e!=null && e.f!=null) {
      try{
        result.e.push(`${calc(e.f/(1-e.e/100))} minus ${e.e}% is ${e.f}`);
      }
      catch(error){
        input.exception('number_e_e', error); return;
      }
    }
  }

  // 3. output
  ['a','b','c','d','e'].forEach(index=>{
    _('result_'+index).innerHTML = result[index].join('<br/>');
  });

}