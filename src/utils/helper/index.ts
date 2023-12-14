export const maskDate  = (date:any) => {
  const d = new Date(date);
  const month = `0${d.getUTCMonth() + 1}`.slice(-2);
  const day = `0${d.getUTCDate()}`.slice(-2);
  const year = d.getUTCFullYear();
  return `${day}-${month}-${year}`;
};


  export const  formatData = (dataString: string) =>{
   
    const parts = dataString.split('-');
  
    const months = [
      'janeiro', 'fevereiro', 'março',
      'abril', 'maio', 'junho',
      'julho', 'agosto', 'setembro',
      'outubro', 'novembro', 'dezembro'
    ];
  
   
    const day = parts[0];
    const  month = months[parseInt(parts[1]) - 1];
    const year = parts[2];
  
    return `${day} de ${month} de ${year}`;
  }



