type MonthMap = { [key: string]: number };

const monthMap: MonthMap = {
   January: 0,
   February: 1,
   March: 2,
   April: 3,
   May: 4,
   June: 5,
   July: 6,
   August: 7,
   September: 8,
   October: 9,
   November: 10,
   December: 11,
};

const convertStringToDate = (dateString: string): Date | number => {
   const dateParts = dateString.split(" ");

   if (dateParts.length === 2) {
      const month = monthMap[dateParts[0]];
      const year = parseInt(dateParts[1], 10);

      if (!isNaN(year) && typeof month !== "undefined") {
         return new Date(year, month);
      }
   }

   return 0;
};

export default convertStringToDate;
