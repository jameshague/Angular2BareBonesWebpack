import { EventBroadcaster, eventType } from '../app/helpers/event-broadcaster'
import { Subscription } from 'rxjs/Subscription'

describe('Event-Broadcaster', () => {

    it('should create event broadcaster',function() {
        let eb = new EventBroadcaster()
        expect(eb).toBeTruthy();
    });

    // it('should allow an event to subscribe',function() {
    //     let eb = new EventBroadcaster()
    //     const sub = eb.subscribe(eventType.SelectedDate, () => {} )        
    //     expect(sub).toBeTruthy()
    // });

    // it('should disallow a null event to subscribe',function() {
    //     let eb = new EventBroadcaster()
    //     expect( eb.subscribe(eventType.SelectedDate, null)).toThrowError("Must set a valid callback")
    // });

    // it('should allow many events to subscribe',function() {
    //     let eb = new EventBroadcaster()     
    //     const sub = eb.subscribe(eventType.SelectedDate, () => {} )        
    //     const sub2 = eb.subscribe(eventType.SelectedDate, () => {} )        
    //     const sub3 = eb.subscribe(eventType.SelectedDate, () => {} )        
    //     expect(sub).toBeTruthy()
    //     expect(sub2).toBeTruthy()
    //     expect(sub3).toBeTruthy()           
    // });

    // it('should allow an item to trigger an event',function() {
    //     let eb = new EventBroadcaster()       
    //     var called = false
    //     var data: any
    //     const sub = eb.subscribe(eventType.SelectedDate, (x: any) => {
    //         called=true
    //         data = x
    //     } )

    //     eb.triggerEvent(eventType.SelectedDate, "testData")

    //     expect(called).toBeTruthy()
    //     expect(data).toEqual("testData")
    // });

    // it('many subscribers should get trigger',function() {
    //     let eb = new EventBroadcaster()    
    //     var dataa: any
    //     var datab: any
    //     var datac: any
    //     const sub = eb.subscribe(eventType.SelectedDate, (x: any) => dataa = x)
    //     const sub2 = eb.subscribe(eventType.SelectedDate, (x: any) => datab = x)
    //     const sub3 = eb.subscribe(eventType.SelectedDate, (x: any) => datac = x)

    //     eb.triggerEvent(eventType.SelectedDate, "testData")

    //     expect(dataa).toEqual("testData")    
    //     expect(datab).toEqual("testData")    
    //     expect(datac).toEqual("testData")    
    // });

    // it('should allow events to unsubscribe and not fire on trigger',function() {
    //    let eb = new EventBroadcaster()    
    //     var dataa: any
    //     var datab: any
    //     var datac: any
    //     const sub = eb.subscribe(eventType.SelectedDate, (x: any) => dataa = x)
    //     const sub2 = eb.subscribe(eventType.SelectedDate, (x: any) => datab = x)
    //     const sub3 = eb.subscribe(eventType.SelectedDate, (x: any) => datac = x)

    //     sub2.unsubscribe()

    //     eb.triggerEvent(eventType.SelectedDate, "testData")

    //     expect(dataa).toEqual("testData")    
    //     expect(datab).toBeUndefined()    
    //     expect(datac).toEqual("testData")          
    // });
});
