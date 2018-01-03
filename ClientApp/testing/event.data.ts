import { IEvent, ISession } from '../app/events/index'

export const mockEvents: IEvent[] = [{
    id: 1,
    name: 'name',
    date: new Date(Date.parse('12/25/2017')),
    time: 'time',
    price: 60,
    imageUrl: 'imageUrl'
},
{
    id: 1,
    name: 'name',
    date: new Date(Date.parse('11/27/2017')),
    time: 'time',
    price: 60,
    imageUrl: 'imageUrl'
}]