using System;

namespace ng4play.Models
{
    public class Address 
    {
        public string address { get; set; }
        public string city { get; set; }
        public string country{ get; set; }
    }
}

/*

export interface IEvent {
    id: number
    name: string
    date: Date
    time: string
    price: number
    imageUrl: string
    location?: {
        address: string
        city: string
        country: string
    }
    sessions: ISession[]
}

export interface ISession {
    id: number
    name: string
    presenter: string
    duration: number
    level: string
    abstract: string
    voters: string[]
}
*/