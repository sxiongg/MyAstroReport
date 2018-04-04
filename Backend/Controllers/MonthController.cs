using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Backend
{
    [Route("signs")]
    public class MonthController : Controller
    {
        public ChartContext _context;
        public MonthController(ChartContext context)
        {
            _context = context;
            Month January = new Month("January", 1);
            Month February = new Month("February", 2);
            Month March = new Month("March", 3);
            Month April = new Month("April", 4);
            Month May = new Month("May", 5);
            Month June = new Month("June", 6);
            Month July = new Month("July", 7);
            Month August = new Month("August", 8);
            Month September = new Month("September", 9);
            Month October = new Month("October", 10);
            Month November = new Month("November", 11);
            Month December = new Month("December", 12);

            if(_context.Months.Count() < 1)
            {
                for(var i = 1; i <= 31; i++)
                {
                    if (i < 20)
                    {
                        January.Dates.Add(new Day (i, "Capricorn"));
                    }
                    else 
                    {
                        January.Dates.Add(new Day(i, "Aquarius"));
                    }
                }
                for(var i = 1; i <= 29; i++)
                {
                    if (i < 19)
                    {
                        February.Dates.Add(new Day (i, "Aquarius"));
                    }
                    else 
                    {
                        February.Dates.Add(new Day(i, "Pisces"));
                    }
                }
                for(var i = 1; i <= 31; i++)
                {
                    if (i < 21)
                    {
                        March.Dates.Add(new Day (i, "Pisces"));
                    }
                    else 
                    {
                        March.Dates.Add(new Day(i, "Aries"));
                    }
                }
                for(var i = 1; i <= 30; i++)
                {
                    if (i < 20)
                    {
                        April.Dates.Add(new Day (i, "Aries"));
                    }
                    else 
                    {
                        April.Dates.Add(new Day(i, "Taurus"));
                    }
                }
                for(var i = 1; i <= 31; i++)
                {
                    if (i < 21)
                    {
                        May.Dates.Add(new Day (i, "Taurus"));
                    }
                    else 
                    {
                        May.Dates.Add(new Day(i, "Gemini"));
                    }
                }
                for(var i = 1; i <= 30; i++)
                {
                    if (i < 21)
                    {
                        June.Dates.Add(new Day (i, "Gemini"));
                    }
                    else 
                    {
                        June.Dates.Add(new Day(i, "Cancer"));
                    }
                }
                for(var i = 1; i <= 31; i++)
                {
                    if (i < 23)
                    {
                        July.Dates.Add(new Day (i, "Cancer"));
                    }
                    else 
                    {
                        July.Dates.Add(new Day(i, "Leo"));
                    }
                }
                for(var i = 1; i <= 31; i++)
                {
                    if (i < 23)
                    {
                        August.Dates.Add(new Day (i, "Leo"));
                    }
                    else 
                    {
                        August.Dates.Add(new Day(i, "Virgo"));
                    }
                }
                for(var i = 1; i <= 30; i++)
                {
                    if (i < 23)
                    {
                        September.Dates.Add(new Day (i, "Virgo"));
                    }
                    else 
                    {
                        September.Dates.Add(new Day(i, "Libra"));
                    }
                }
                for(var i = 1; i <= 31; i++)
                {
                    if (i < 23)
                    {
                        October.Dates.Add(new Day (i, "Libra"));
                    }
                    else 
                    {
                        October.Dates.Add(new Day(i, "Scorpio"));
                    }
                }
                for(var i = 1; i <= 30; i++)
                {
                    if (i < 22)
                    {
                        November.Dates.Add(new Day (i, "Scorpio"));
                    }
                    else 
                    {
                        November.Dates.Add(new Day(i, "Sagittarius"));
                    }
                }
                for(var i = 1; i <= 30; i++)
                {
                    if (i < 22)
                    {
                        December.Dates.Add(new Day (i, "Sagittarius"));
                    }
                    else 
                    {
                        December.Dates.Add(new Day(i, "Capricorn"));
                    }
                }
            }

            _context.Months.Add(January);
            _context.Months.Add(February);
            _context.Months.Add(March);
            _context.Months.Add(April);
            _context.Months.Add(May);
            _context.Months.Add(June);
            _context.Months.Add(July);
            _context.Months.Add(August);
            _context.Months.Add(September);
            _context.Months.Add(October);
            _context.Months.Add(November);
            _context.Months.Add(December);
            _context.SaveChanges();
        }

        [HttpGet]
        public string GetSign(int monthNumber, int dayNumber)
        {
            var findMonth = _context.Months.Include(m => m.Dates ).FirstOrDefault(c => c.MonthNumber == monthNumber);
            var findDay = findMonth.Dates.FirstOrDefault(d => d.DayNumber == dayNumber);
            return findDay.Sign;        
        }
    }
}