import { HomePage } from './home'

describe('HomePage', () => {
   
   let foo = 'foo';
   
   it("should succeed", () => expect(true).toBe(true));
   it('should fail', () => expect(false).toBe(true));
   it('should take a long time', () => 
        setTimeout(expect(true).toBe(true), 6000));
   
});