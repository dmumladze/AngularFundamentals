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
            var json = System.IO.File.ReadAllText(Path.Combine(Startup.ContentRootPath, "ClientApp", "testing", "events.json"));
            EventData = JsonConvert.DeserializeObject<List<Event>>(json);
        }

        [HttpGet]
        public IEnumerable<Event> Get()
        {            
            return EventData;
        }

        [HttpGet("{id}")]
        public Event Get(int id)
        {
            return EventData.Find(e => e.id == id);
        }

        [HttpGet("sessions/search/{term?}")]
        public IEnumerable<Session> SearchSessions(string term)  
        {
            if (string.IsNullOrWhiteSpace(term))
                return null;

            var foundSessions = new List<Session>();

            EventData.ForEach(e => {
                e.sessions?.ForEach(s => {                                            
                    if (s.name != null && s.name.ToLower().Contains(term))
                    {   
                        s.eventId = e.id;                     
                        foundSessions.Add(s);
                    }
                });
            });

            return foundSessions;
        }        

        [HttpPost]
        public void Post([FromBody]Event value)
        {
            var maxId = EventData.Max(e => e.id);
            value.id = maxId+1;
            EventData.Add(value);
        }

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

        [HttpPost("{id}/sessions/{sessionId}/voters/{voterName}")]
        public void AddVoter(int id, int sessionId, string voterName)
        {
            var evnt = EventData.Find(e => e.id == id);
            if (evnt != null)
            {
                var session = evnt.sessions?.Find(s => s.id == sessionId);
                if (session != null)
                {
                    if (session.voters == null)
                        session.voters = new List<string>();

                    session.voters.Add(voterName);
                }
            }
        }       

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var ix = EventData.FindIndex(e => e.id == id);
            if (ix > -1)
                EventData.RemoveAt(ix);                     
        }

        [HttpDelete("{id}/sessions/{sessionId}/voters/{voterName}")]
        public void DeleteVoter(int id, int sessionId, string voterName)
        {
            var evnt = EventData.Find(e => e.id == id);
            if (evnt != null)
            {
                var session = evnt.sessions?.Find(s => s.id == sessionId);
                if (session != null)
                {
                    if (session.voters == null)
                        return;

                    session.voters.Remove(voterName);
                }
            }
        }

        public IActionResult Spa()
        {
            return File("~/index.html", "text/html");
        }         
    }
}
