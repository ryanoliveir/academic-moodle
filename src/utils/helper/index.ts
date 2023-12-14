export const maskDate = (date: Date) => {
    if (!date) return ``;

    const parsedDate = typeof date === 'string' ? new Date(date) : date;

    const day = parsedDate.getDate();
    const month = parsedDate.getMonth() + 1; // Months are zero-based, so add 1
    const year = parsedDate.getFullYear();

    const newDate = `${day}-${month}-${year}`
  
    return newDate;
  };


  export const  formatData = (dataString: string) =>{
    // Dividir a string da data usando o caractere "-"
    const parts = dataString.split('-');
  
    // Mapear o mês para o nome completo
    const months = [
      'janeiro', 'fevereiro', 'março',
      'abril', 'maio', 'junho',
      'julho', 'agosto', 'setembro',
      'outubro', 'novembro', 'dezembro'
    ];
  
    // Obter o dia, mês e ano da string dividida
    const day = parts[0];
    const  month = months[parseInt(parts[1]) - 1];
    const year = parts[2];
  
    // Retornar a data formatada
    return `${day} de ${month} de ${year}`;
  }



