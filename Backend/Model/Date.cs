using System;

namespace Backend
{
    public class Day
    {
        public int DayNumber { get; set; }
        public string Sign { get; set; }
        public int Id { get; set; }
        public Day()
        {

        }
        public Day(int day, string sign)
        {
            this.DayNumber = day;
            this.Sign = sign;
        }
    }
}