import { TestBed } from '@angular/core/testing';

import { RouteResolverService } from './route-resolver.service';

describe('RouteResolverService', () => {
  let service: RouteResolverService;
  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        providers: [
          RouteResolverService,
        ],
      }
    )
    service = TestBed.get(RouteResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of route config objects', () => {
    const data = { path: '/home', text: 'Home' };
    let list = service.getRouteList();
    expect(list).toBeDefined();
    expect(list[0]).toEqual(data);
  })
});
