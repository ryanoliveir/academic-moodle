export const maskDate = (date: Date) => {
    if (!date) return ``;

    const parsedDate = typeof date === 'string' ? new Date(date) : date;

    const day = parsedDate.getDate();
    const month = parsedDate.getMonth() + 1; // Months are zero-based, so add 1
    const year = parsedDate.getFullYear();

    const newDate = `${day}-${month}-${year}`
  
    return newDate;
  };