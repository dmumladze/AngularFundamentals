using System;
using System.Collections.Generic;

namespace ng4play.Models
{
    public class Session
    {
        public int id { get; set; }
        public string name { get; set; }
        public string presenter { get; set; }
        public int duration { get; set; }
        public string level { get; set; }
        public string @abstract { get; set; }
        public List<string> voters { get; set; }
    }
}