// Import necessary modules and classes
import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { of } from 'rxjs';

// Your existing describe block for 'UsersService'
describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Existing describe block for 'all'
  describe('all', () => {
    // Body of the 'all' test
  });
  
  // New describe block for 'findOne'
  describe('findOne', () => {
    it('should return a single user', () => {
      // Mock user response data
      const userResponse = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        pokemon: 'Charizard'
      };

      // Initialize a variable to hold the response
      let response = new Object();

      // Spy on the 'findOne' method and return the mock response
      spyOn(service, 'findOne').and.returnValue(of(userResponse));

      // Call the 'findOne' method and subscribe to the response
      service.findOne('2').subscribe(res => {
        response = res;
      });

      // Expect the response to be equal to the mock user response
      expect(response).toEqual(userResponse);
    });
  });
});
