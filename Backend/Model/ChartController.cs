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