using System;
using System.Collections.Generic;

namespace ng4play.Models
{
    public class Event
    {
        public int id { get; set; }
        public string name { get; set; }
        public DateTime date { get; set; }
        public string time { get; set; }
        public double price { get; set; }
        public string imageUrl { get; set; }
        public Address location { get; set; }
        public List<Session> sessions { get; set; }
    }
}
