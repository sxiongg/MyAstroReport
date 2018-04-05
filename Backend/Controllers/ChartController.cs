using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Backend
{
    [Route("charts")]
    public class ChartsController : Controller
    {
        public ChartContext _context;
        public ChartsController(ChartContext context)
        {
            _context = context;

            if(_context.Charts.Count() < 1)
            {
                Chart seedDataChart = new Chart ("Sia" , "07/29/1993", "Leo", "Rooster", 9, "A magnetic personality, confidence, and idealism are the essence of this vibration. It includes tolerance, compassion, and understanding. The person dreams of a world with understanding, harmony, and trust. There's a global consciousness, worldly and sophisticated, with an urge to accomplish humanitarian ideals. Philanthropy seems to be built in.", 4, "Events and circumstances tend to fill life with things practical, or making them so. Patience and care are used to deal with life situations. There's likely to be a strong sense of what is right. The person approaches things with a focus on security accompanied with conscientiousness and sincerity.");
                _context.Charts.Add(seedDataChart);
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public List<Chart> GetCharts()
        {
            return _context.Charts.ToList();
        }

        [HttpGet("{id}")]
        public Chart GetSingleChart(int id)
        {
            var chart = _context.Charts.FirstOrDefault(c => c.Id == id);
            return chart;
        }

        [HttpPost]
        public Chart PostNewChart([FromBody]Chart newchart)
        {
            _context.Charts.Add(newchart);
            _context.SaveChanges();

            return newchart;
        }

        [HttpDelete("{id}")]
        public void DeleteChart(int id)
        {
            var found = _context.Charts.FirstOrDefault(i => i.Id == id);
            _context.Charts.Remove(found);
            _context.SaveChanges();
        }
    }
}