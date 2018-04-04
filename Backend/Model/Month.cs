using System;
using System.Collections.Generic;

namespace Backend
{
    public class Month
    {
        public string MonthName { get; set; }
        public int MonthNumber { get; set; }
        public List<Day> Dates { get; set; }
        public int Id { get; set; }
        public Month()
        {

        }
        public Month(string name, int number)
        {
            this.MonthName = name;
            this.MonthNumber = number;
            this.Dates = new List<Day>();
        }
    }
}