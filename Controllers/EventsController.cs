using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;

using Newtonsoft.Json;

using ng4play;
using ng4play.Models;

namespace ng4play.Controllers
{
    [Route("api/[controller]")]
    public class EventsController : Controller
    {
        private readonly static List<Event> EventData;

        static EventsController()
        {
            var json = System.IO.File.ReadAllText(Path.Combine(Startup.ContentRootPath, "events.json"));
            EventData = JsonConvert.DeserializeObject<List<Event>>(json);
        }
        // GET api/values
        [HttpGet]
        public IEnumerable<Event> Get()
        {            
            return EventData;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Event Get(int id)
        {
            return EventData.Find(e => e.id == id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Event value)
        {
            var maxId = EventData.Max(e => e.id);
            value.id = maxId+1;
            EventData.Add(value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Event value)
        {
            var ix = EventData.FindIndex(e => e.id == id);
            if (ix > -1) {
                EventData.RemoveAt(ix);
                value.id = id;
                EventData.Add(value);
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var ix = EventData.FindIndex(e => e.id == id);
            if (ix > -1) {
                EventData.RemoveAt(ix);
            }            
        }
    }
}
